using System;
using System.Globalization;
using Bogus;
using Bogus.DataSets;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Core.FakeDataGenerator.Domain.Interfaces;

namespace RadioReport.Core.FakeDataGenerator.Domain.Services
{
    public class FakeDataService : IFakeDataService
    {
        private readonly HttpAuthContext _httpAuthContext;
        private readonly string[] _languages = { "DE | DE", "PL | PL", "EN | EN" };

        protected Random Random { get; }
        protected Randomizer Randomizer { get; }

        public FakeDataService(HttpAuthContext httpAuthContext)
        {
            _httpAuthContext = httpAuthContext;
            Random = new Random(DateTime.Now.Millisecond);
            Randomizer = new Randomizer(DateTime.Now.Millisecond);
        }

        public (Report report, Patient patient) CreateReportWithPatient(string reportTypeName, bool isFindingToday = true, bool isStatusOpen = true)
        {
            var patient = CreatePatientInternal();
            var report = GetReport(reportTypeName, patient.BirthDate, isFindingToday, isStatusOpen);

            return (report, patient);
        }

        public Patient CreatePatient() => CreatePatientInternal();

        private Report GetReport(string reportTypeName, DateTime patientBirthDate, bool isFindingToday, bool isStatusOpen)
        {
            var findingsDate = DateTime.Now;

            return new Faker<Report>()
                .RuleFor(r => r.Language, f => f.PickRandom(_languages))
                .RuleFor(r => r.PatientAge, PatientHelper.CalculateAge(patientBirthDate, DateTime.Today))
                .RuleFor(r => r.Evaluation, f => $"BIRADS {f.Random.Int(1, 20).ToString(CultureInfo.InvariantCulture)}")
                .RuleFor(r => r.PresetCode, "full")
                .RuleFor(r => r.Status, f => isStatusOpen ? ReportStatus.Open : f.PickRandomWithout(ReportStatus.Unknown))
                .RuleFor(r => r.ExaminationType, f => reportTypeName.IsNullOrEmpty() ? f.PickRandom(ReportTypeNames.GetReportTypeNames()) : reportTypeName)
                .RuleFor(r => r.FindingsDate, f => isFindingToday ? findingsDate : findingsDate = f.Date.Past(5, DateTime.Now))
                .RuleFor(r => r.ExaminationDate, f => f.Date.Recent(30, findingsDate))
                .RuleFor(r => r.FreeField, f => f.Random.AlphaNumeric(5))
                .RuleFor(r => r.InstituteId, _httpAuthContext.InstituteId)
                .Generate();
        }

        private Patient CreatePatientInternal()
        {
            var gender = Gender.Male;
            var firstName = string.Empty;
            var lastName = string.Empty;

            return new Faker<PatientDto>()
                .RuleFor(p => p.Gender, f => gender = f.PickRandomWithout(Gender.None))
                .RuleFor(p => p.FirstName, f => firstName = f.Name.FirstName(gender == Gender.Male ? Name.Gender.Male : Name.Gender.Female))
                .RuleFor(p => p.LastName, f => lastName = f.Name.LastName())
                .RuleFor(p => p.Name, f => $"{firstName} {lastName}")
                .RuleFor(p => p.BirthDate, f => f.Date.Past(80, DateTime.Now.AddYears(-18)))
                .RuleFor(p => p.ExternalIdentifier, f => $"XYZ-{f.Random.AlphaNumeric(1)}")
                .RuleFor(p => p.InstituteId, _httpAuthContext.InstituteId)
                .Generate()
                .MapToPatient(_httpAuthContext);
        }
    }
}
