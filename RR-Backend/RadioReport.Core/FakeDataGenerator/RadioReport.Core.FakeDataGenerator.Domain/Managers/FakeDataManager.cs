using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Bogus;
using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Core.FakeDataGenerator.Domain.Interfaces;
using RadioReport.Core.FakeDataGenerator.Domain.Models;

namespace RadioReport.Core.FakeDataGenerator.Domain.Managers
{
    public class FakeDataManager : IFakeDataManager
    {
        private readonly IFakeDataService _fakeDataService;
        private readonly IReportListFakeDataService _reportListFakeDataService;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IMapper _mapper;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly Randomizer _randomizer;

        public FakeDataManager(
            IFakeDataService fakeDataService,
            IReportListFakeDataService reportListFakeDataService,
            IKafkaProducer kafkaProducer,
            IMapper mapper,
            HttpAuthContext httpAuthContext)
        {
            _fakeDataService = fakeDataService;
            _reportListFakeDataService = reportListFakeDataService;
            _kafkaProducer = kafkaProducer;
            _mapper = mapper;
            _httpAuthContext = httpAuthContext;
            _randomizer = new Randomizer(DateTime.Now.Millisecond);
        }

        public async Task<Report> CreateFakeReport(CreateFakeReportRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));
            if (!Enum.TryParse<ModuleType>(request.ModuleName, true, out var moduleType)) throw new ArgumentException(nameof(request.ModuleName));

            SetDefaultsIfAbsent(request, _httpAuthContext.InstituteId, _httpAuthContext.UserId);

            var (report, patient) = _fakeDataService.CreateReportWithPatient(request.ModuleName);
            patient = await GetOrAddPatient(patient);
            report.Status = Enum.Parse<ReportStatus>(request.ReportStatus);
            report.UserId = request.UserId!.Value;
            report.PatientId = patient.Id;

            var addReportRequest = new AddReportSyncRequest(moduleType)
            {
                Report = report
            };
            var addReportResponse = await _kafkaProducer.SendSynchronousRequest<AddReportSyncResponse>(addReportRequest, _httpAuthContext);
            if (!addReportResponse.IsSuccess) throw new AddReportFailedException();

            return addReportResponse.Report;
        }

        public async Task<int> CreateFakeReports(CreateFakeReportsRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            if (request.ModuleNames.IsNullOrEmpty() || !request.ModuleNames.All(typeName => Enum.TryParse<ModuleType>(typeName, true, out _)))
                throw new ArgumentException(nameof(request.ModuleNames));

            if (!request.ReportStatuses.IsNullOrEmpty() && !request.ReportStatuses.All(status => Enum.TryParse<ReportStatus>(status, true, out _)))
                throw new ArgumentException(nameof(request.ReportStatuses));

            var reports = new List<Report>();
            for (var i = 0; i < request.Amount; i++)
            {
                var singleRequest = new CreateFakeReportRequest
                {
                    ModuleName = _randomizer.CollectionItem(request.ModuleNames.ToList()),
                    ReportStatus = request.ReportStatuses.IsNullOrEmpty()
                        ? ReportStatus.Open.ToString()
                        : _randomizer.CollectionItem(request.ReportStatuses.ToList()),
                    InstituteId = request.InstituteIds.IsNullOrEmpty()
                        ? _httpAuthContext.InstituteId
                        : _randomizer.CollectionItem(request.InstituteIds.ToList()),
                    UserId = request.UserIds.IsNullOrEmpty()
                        ? _httpAuthContext.UserId
                        : _randomizer.CollectionItem(request.UserIds.ToList())
                };
                reports.Add(await CreateFakeReport(singleRequest));
            }

            return reports.Count;
        }

        public async Task<Patient> CreateFakePatient(Guid? instituteId) => await GetOrAddPatient(_fakeDataService.CreatePatient());

        public async Task<int> CreateFakePatients(CreateFakePatientsRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var patients = new List<Patient>();
            for (var i = 0; i < request.Amount; i++)
            {
                patients.Add(await CreateFakePatient(request.InstituteIds.IsNullOrEmpty()
                    ? _httpAuthContext.InstituteId
                    : _randomizer.CollectionItem(request.InstituteIds.ToList())));
            }

            return patients.Count;
        }

        public async Task<int> CreateFakeReportListEntries(int amount)
        {
            var reportEntries = await _reportListFakeDataService.CreateReportsWithPatients(amount, _httpAuthContext.InstituteId);
            foreach (var report in reportEntries.Select(reportEntry => _mapper.Map<Report>(reportEntry)))
            {
                await _kafkaProducer.WriteMessage(KafkaTopic.ReportCreated, report.AsJson(), _httpAuthContext);
            }

            return reportEntries.Count;
        }

        private static void SetDefaultsIfAbsent(CreateFakeReportRequest request, Guid instituteId, Guid userId)
        {
            request.InstituteId = request.InstituteId.IsNullOrEmpty() ? instituteId : request.InstituteId;
            request.UserId = request.UserId.IsNullOrEmpty() ? userId : request.UserId;
            var couldParse = Enum.TryParse<ReportStatus>(request.ReportStatus, true, out var reportStatus);
            request.ReportStatus = !couldParse || reportStatus == ReportStatus.Unknown
                ? ReportStatus.InProgress.ToString()
                : reportStatus.ToString();
        }

        private async Task<Patient> GetOrAddPatient(Patient patient)
        {
            var patientRequest = new GetOrAddPatientSyncRequest
            {
                PatientDto = patient.MapToDto()
            };
            var patientResponse = await _kafkaProducer.SendSynchronousRequest<GetOrAddPatientSyncResponse>(patientRequest, _httpAuthContext);
            if (!patientResponse.IsSuccess) throw new GetOrAddPatientFailedException($"Request {patientRequest.AsIndentedJson()}");

            return patientResponse.PatientDto.MapToPatient(_httpAuthContext);
        }
    }
}
