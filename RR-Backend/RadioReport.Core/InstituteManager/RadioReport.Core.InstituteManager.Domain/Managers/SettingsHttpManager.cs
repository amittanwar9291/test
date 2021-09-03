using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Helpers;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Models;
using RadioReport.Core.InstituteManager.Domain.Interfaces;
using RadioReport.Core.InstituteManager.Domain.Models;
using DicomMap = RadioReport.Common.Logic.Models.Import.DicomMap;

namespace RadioReport.Core.InstituteManager.Domain.Managers
{
    public class SettingsHttpManager : ISettingsHttpManager
    {
        private readonly IDicomMapIOService _dicomMapIOService;
        private readonly IInstituteLogoService _instituteLogoService;
        private readonly IInstituteManager _instituteManager;
        private readonly ILogger<SettingsHttpManager> _logger;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IKeyStoreService _keyStoreService;
        private readonly IInstituteService _instituteService;

        public SettingsHttpManager(
            IDicomMapIOService dicomMapIOService,
            IInstituteLogoService instituteLogoService,
            IInstituteManager instituteManager,
            ILogger<SettingsHttpManager> logger,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            IKeyStoreService keyStoreService,
            IInstituteService instituteService
        )
        {
            _dicomMapIOService = dicomMapIOService;
            _instituteLogoService = instituteLogoService;
            _instituteManager = instituteManager;
            _logger = logger;
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
            _keyStoreService = keyStoreService;
            _instituteService = instituteService;
        }

        public Task<RequestResponse> GetDicomMap(string moduleTypeString, bool includeUniversal) =>
            _dicomMapIOService.GetDicomMap(moduleTypeString, includeUniversal);

        public Task<RequestResponse> SetDicomMap(DicomMap dicomMap) => _dicomMapIOService.SetDicomMap(dicomMap);

        public Task<RequestResponse> SetDicomMaps(IEnumerable<DicomMap> dicomMaps) => _dicomMapIOService.SetDicomMaps(dicomMaps);

        public async Task<RequestResponse> InitializeInstitute(InstituteConfigurationFile configurationFile)
        {
            if (configurationFile == null) throw new ArgumentNullException(nameof(configurationFile));

            try
            {
                var jwtToken = JwtTokenHelper.ValidateRsaSignedJwtToken(configurationFile.InstituteConfigJwt, _keyStoreService);

                if (!jwtToken.TryGetJObject(JwtPayloadKey.InstituteConfiguration, out var instituteJObject))
                    throw new InvalidJwtTokenException("Invalid institute config jwt, no institute object retrievable");

                var newInstitute = instituteJObject.ToObject<Institute>();
                if (newInstitute == null)
                    throw new InvalidJwtTokenException("Invalid institute config jwt, no institute object retrievable");

                _httpAuthContext.InstituteId = newInstitute.Id;

                var existingInstitute = await _instituteManager.GetFullInstituteNoTracking(newInstitute.Id);
                if (existingInstitute == null)
                {
                    await _instituteManager.AddAsync(newInstitute, true);
                }
                else
                {
                    existingInstitute.Address.Id = newInstitute.Address.Id;
                    existingInstitute.Address.Geometry.Id = newInstitute.Address.Geometry.Id;
                    existingInstitute.Address.Properties.Id = newInstitute.Address.Properties.Id;
                    existingInstitute.DuplicateExternalIdentifierAllowed = newInstitute.DuplicateExternalIdentifierAllowed;

                    await _instituteManager.UpdateAsync(existingInstitute);
                }

                await AddInstituteLogo(configurationFile.InstituteLogo);
                await CreateDefaultAdminUserIfNotExists();

                return RequestResponse.Success();
            }
            catch (Exception e)
            {
                throw new InitializeInstituteFailedException(e.Message, e.InnerException);
            }
        }

        public async Task<List<ReportSessionViewModel>> GetReportSessions()
        {
            var request = new ReportSessionViewModelRequest();
            var result = new List<ReportSessionViewModel>();

            var moduleCount = await _instituteService.GetAvailableModuleCount();
            var responseCount = 0;
            var cancellationSource = new CancellationTokenSource();
            await _kafkaProducer.SendObservableRequest<ReportSessionViewModelResponse>(request, _httpAuthContext, cancellationToken: cancellationSource.Token)
                .Subscribe(
                    moduleResponse =>
                    {
                        result.AddRange(moduleResponse.ReportSessions);
                        if (++responseCount == moduleCount) cancellationSource.Cancel();
                    }, exception =>
                    {
                        if (!(exception is OperationCanceledException)) throw exception;
                    }).ConfigureAwait(false);

            if (!result.Any()) return result;

            var usersRequest = new GetUsersSyncRequest();
            usersRequest.UserIds.AddRange(result.Select(r => r.UserId).Distinct());
            var usersResponse = await _kafkaProducer.SendSynchronousRequest<GetUsersSyncResponse>(usersRequest, _httpAuthContext);

            foreach (var viewModel in result)
            {
                var user = usersResponse.Users.Single(u => string.Equals(u.Id, viewModel.UserId.ToString(), StringComparison.InvariantCultureIgnoreCase));
                viewModel.UserInitial = user.Initial;
            }

            return result;
        }

        public async Task RemoveReportSession(string reportId, string moduleName)
        {
            if (!Enum.TryParse<ModuleType>(moduleName, out var moduleType)) throw new InvalidArgumentException(nameof(moduleName));
            if (!Guid.TryParse(reportId, out var reportGuid)) throw new InvalidArgumentException(nameof(reportId));

            var topic = KafkaTopic.Create(moduleType, KafkaTopic.Request.RemoveReportSession);
            await _kafkaProducer.WriteMessage(topic, reportGuid.ToString(), _httpAuthContext);
        }

        public async Task RemoveAllReportSessions() => await _kafkaProducer.Trigger(KafkaTopic.Request.RemoveAllReportSessions, _httpAuthContext);

        private async Task AddInstituteLogo(InstituteLogo logo)
        {
            if (logo == null)
            {
                _logger.LogWarning("no institute logo available");
                return;
            }

            try
            {
                await _instituteLogoService.UploadInstituteLogo(logo);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "UploadInstituteLogo failed");
            }
        }

        private async Task CreateDefaultAdminUserIfNotExists()
        {
            var defaultAdminUser = new UserViewModel
            {
                UserName = "ad",
                FirstName = "Adminis",
                Surname = "trator",
                Initial = "AD",
                Salutation = Salutation.Mr,
                LanguageOfProgram = Language.DE,
                LanguageDoctorFindings = Language.DE,
                LanguagePatientFindings = Language.DE,
                Role = UserRole.Administrator,
                IsActive = true
            };

            try
            {
                var getUserRequest = new GetUserSyncRequest
                {
                    UserName = defaultAdminUser.UserName
                };
                var response = await _kafkaProducer.SendSynchronousRequest<GetUserSyncResponse>(getUserRequest, _httpAuthContext);
                if (response.User == null)
                {
                    var addUserRequest = new AddUserSyncRequest
                    {
                        User = defaultAdminUser
                    };
                    await _kafkaProducer.SendSynchronousRequest<AddUserSyncResponse>(addUserRequest, _httpAuthContext);
                }
            }
            catch (Exception e)
            {
                throw new AddDefaultAdminUserFailedException(ErrorMessageResources.Account_CreatingDeafultAdminFailed, e);
            }
        }
    }
}
