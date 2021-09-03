using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using RadioReport.Common.Enums;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Core.FakeDataGenerator.Domain.Interfaces;
using RadioReport.Core.ReportList.Domain.Models;

namespace RadioReport.Core.FakeDataGenerator.Domain.Services
{
    public class ReportListFakeDataService : FakeDataService, IReportListFakeDataService
    {
        private readonly IMapper _mapper;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;

        public ReportListFakeDataService(IMapper mapper, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext) : base(httpAuthContext)
        {
            _mapper = mapper;
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
        }

        public async Task<List<ReportEntry>> CreateReportsWithPatients(int amount, Guid instituteId)
        {
            var reportEntries = new List<ReportEntry>();
            var patients = new List<Patient>();
            var usersRequest = new GetUsersSyncRequest();
            var users = (await _kafkaProducer.SendSynchronousRequest<GetUsersSyncResponse>(usersRequest, _httpAuthContext)).Users
                .Where(u => u.Role == UserRole.Superadministrator || u.Role == UserRole.Editor).ToList();

            for (var i = 0; i < amount; i++)
            {
                var (report, patient) = CreateReportWithPatient(string.Empty, false, false);
                var user = users[Random.Next(users.Count)];
                var reportEntry = _mapper.Map<Report, ReportEntry>(report);
                reportEntry.UserId = Guid.Parse(user.Id);
                reportEntry.UserLabel = user.Initial;
                reportEntries.Add(reportEntry);
                if (patients.All(p => p.ExternalIdentifier != patient.ExternalIdentifier))
                {
                    patients.Add(patient);
                }
            }

            var ids = await GetAddedPatientIds(patients);
            foreach (var reportEntry in reportEntries)
            {
                reportEntry.PatientId = ids[Random.Next(patients.Count)];
            }

            return reportEntries;
        }

        private async Task<List<Guid>> GetAddedPatientIds(IEnumerable<Patient> patients)
        {
            var result = new List<Guid>();
            foreach (var patient in patients)
            {
                var addPatientRequest = new GetOrAddPatientSyncRequest
                {
                    PatientDto = patient.MapToDto()
                };
                var response = await _kafkaProducer.SendSynchronousRequest<GetOrAddPatientSyncResponse>(addPatientRequest, _httpAuthContext);
                if (!response.IsSuccess) throw new GetOrAddPatientFailedException($"Request {addPatientRequest.AsIndentedJson()}");

                result.Add(response.PatientDto.Id);
            }

            return result;
        }
    }
}
