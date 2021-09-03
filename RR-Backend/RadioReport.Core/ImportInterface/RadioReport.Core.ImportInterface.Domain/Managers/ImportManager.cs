using Microsoft.Extensions.Logging;
using RadioReport.Core.ImportInterface.Domain.Interfaces;
using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using LinqKit;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.CVI42;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Models;
using RadioReport.Core.ImportInterface.Domain.Models;

namespace RadioReport.Core.ImportInterface.Domain.Managers
{
    public class ImportManager : Manager<CVI42Imports, ICVI42ImportsRepository>, IImportManager
    {
        private readonly IMinIOService _minIoService;
        private readonly ILogger<ImportManager> _logger;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IKafkaProducer _kafkaProducer;

        public ImportManager(ICVI42ImportsRepository repository, IMinIOService minIoService,
            ILogger<ImportManager> logger, HttpAuthContext httpAuthContext, IKafkaProducer kafkaProducer) : base(repository)
        {
            _minIoService = minIoService;
            _logger = logger;
            _httpAuthContext = httpAuthContext;
            _kafkaProducer = kafkaProducer;
        }

        public async Task<RequestResponse> ImportCVI42(XmlReport xmlReport)
        {
            Cvi42Serializer.IsValidCvi42Report(xmlReport, out string studyInstanceUid);
            
            await _minIoService.CreateBucketIfNotExist(MinIO.Buckets.CVI42Data);

            if ((await Repository.GetManyAsync(c =>
                    c.StudyInstanceUid == studyInstanceUid && c.InstituteId == _httpAuthContext.InstituteId))
                .Any())
            {
                Repository.Add(new CVI42Imports(_httpAuthContext.InstituteId, studyInstanceUid));
                await Repository.SaveChangesAsync();

                var objectList = await _minIoService.ListObjectsAsync(MinIO.Buckets.CVI42Data,
                    $"{_httpAuthContext.InstituteId}/{studyInstanceUid}/{MinIO.CVI42FileName}");

                if (objectList.Any(o => o.Key.Contains(MinIO.CVI42FileName)))
                {
                    await _minIoService.RemoveObjectAsync(MinIO.Buckets.CVI42Data,
                        $"{_httpAuthContext.InstituteId}/{studyInstanceUid}/{MinIO.CVI42FileName}");
                }
            }
            
            await _minIoService.PutObjectAsync(MinIO.Buckets.CVI42Data,
                $"{_httpAuthContext.InstituteId}/{studyInstanceUid}",
                $"{MinIO.CVI42FileName}",
                Encoding.ASCII.GetBytes(JsonConvert.SerializeObject(xmlReport)));

            return RequestResponse.Success();
        }

        public async Task<CheckExistingImportResponse> CheckExistingImport(string studyInstanceUid, string accessionNumber)
        {
            var httpResponse = new CheckExistingImportResponse();

            var duplicateDataRequest = new GetDuplicateImportAllowedDataSyncRequest();
            var duplicateData =
                await _kafkaProducer.SendSynchronousRequest<GetDuplicateImportAllowedDataSyncResponse>(duplicateDataRequest, _httpAuthContext);

            httpResponse.IsDuplicateAllowed = duplicateData.IsDuplicateAllowed;
            if (duplicateData.IsDuplicateAllowed) return httpResponse;

            httpResponse.IsExisting = false;
            var checkExistingRequest = new CheckExistingImportRequest
            {
                StudyInstanceUid = studyInstanceUid ?? string.Empty,
                AccessionNumber = accessionNumber ?? string.Empty
            };
            var responseCount = 0;
            var cancellationSource = new CancellationTokenSource();
            await _kafkaProducer.SendObservableRequest<CheckExistingImportSyncResponse>(checkExistingRequest, _httpAuthContext,
                ConfigurationConsts.KafkaObservableCheckExistingImportTimeoutMs, cancellationSource.Token).Subscribe(
                moduleResponse =>
                {
                    if (moduleResponse.IsExisting)
                    {
                        httpResponse.IsExisting = true;
                        httpResponse.ReportId = moduleResponse.ReportId;
                        httpResponse.ModuleName = moduleResponse.ModuleType.ToString();
                        cancellationSource.Cancel();
                    }

                    if (++responseCount == duplicateData.AvailableModules.Count) cancellationSource.Cancel();
                },
                exception =>
                {
                    if (!(exception is OperationCanceledException)) throw exception;
                },
                () =>
                {
                    if (httpResponse.IsExisting != true && responseCount != duplicateData.AvailableModules.Count)
                        throw new ExistingImportCheckFailedException("Not all modules responded in time during existing import check");
                }).ConfigureAwait(false);

            return httpResponse;
        }
    }
}
