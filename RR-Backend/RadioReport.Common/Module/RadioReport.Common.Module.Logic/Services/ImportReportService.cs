using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using MoreLinq;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.Common.Module.Logic.Services
{
    public class ImportReportService : IImportReportService
    {
        private readonly ILogger<ImportReportService> _logger;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly IDicomValueParser _dicomValueParser;
        private readonly ModuleContext _moduleContext;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IReportManager _reportManager;
        private readonly IReportPageService _reportPageService;

        public ImportReportService(
            ILogger<ImportReportService> logger,
            IKafkaProducer kafkaProducer,
            ModuleContext moduleContext,
            IDicomValueParser dicomValueParser,
            HttpAuthContext httpAuthContext,
            IReportManager reportManager,
            IReportPageService reportPageService
        )
        {
            _logger = logger;
            _kafkaProducer = kafkaProducer;
            _moduleContext = moduleContext;
            _dicomValueParser = dicomValueParser;
            _httpAuthContext = httpAuthContext;
            _reportManager = reportManager;
            _reportPageService = reportPageService;
        }

        public async Task<Report> ImportReport(ImportReportRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var reportAndPatientImportValues = request.ImportValues
                .Select(StringImportValue.Create)
                .Where(v => v.IsSuccess)
                .Select(v => v.Value)
                .ToList();
            if (reportAndPatientImportValues.IsNullOrEmpty()) throw new MissingImportDataException();

            var patient = await ImportPatientDicomData(reportAndPatientImportValues);
            var report = ImportReportDicomData(reportAndPatientImportValues, patient);
            report = await _reportManager.AddAsync(report);
            await ImportLocalizationDicomData(reportAndPatientImportValues, patient, report);

            var seriesImportValues = request.ImportValues
                .Select(SeriesImportValue.Create)
                .Where(v => v.IsSuccess)
                .Select(v => v.Value)
                .DistinctBy(v => v.SeriesInstanceUid)
                .Where(serie => !serie.Values.IsNullOrEmpty())
                .ToList();

            if (!seriesImportValues.IsNullOrEmpty())
            {
                var technologyPageInfo = report.Pages.Single(p => p.TypeName == _moduleContext.TechnologyPageName);
                technologyPageInfo.PageId = await CreateTechnologyPageAndImport(seriesImportValues, report.Id);
            }

            report = await _reportManager.UpdateAsync(report);
            await _kafkaProducer.WriteMessage(KafkaTopic.ReportCreated, report.AsJson(), _httpAuthContext);

            _logger.LogInformation(LogEventIds.ImportReport, LogMessageResources.Import_ReportImported, report.Id, _httpAuthContext.UserId);

            return report;
        }

        private async Task<Patient> ImportPatientDicomData(ICollection<StringImportValue> importValues)
        {
            var dto = new PatientDto();
            SetDicomValues(importValues, dto);
            SetPatientNameIfAvailable(dto);

            return await GetOrAddPatient(dto);
        }

        private Report ImportReportDicomData(ICollection<StringImportValue> importValues, Patient patient)
        {
            var report = new Report
            {
                PatientId = patient.Id,
                UserId = _httpAuthContext.UserId,
                InstituteId = _httpAuthContext.InstituteId,
                Status = ReportStatus.InProgress,
                ExaminationType = _moduleContext.Type.GetReportTypeName(),
                FindingsDate = DateTime.Now,
                TotalPageCount = _moduleContext.TotalPageCount
            };
            var pages = _reportPageService.GetPagesForPreset("full");
            if (!pages.IsNullOrEmpty())
            {
                report.Pages.AddRange(pages);
            }
            SetDicomValues(importValues, report);

            return report;
        }

        private async Task ImportLocalizationDicomData(ICollection<StringImportValue> importValues, Patient patient, Report report)
        {
            var patientInformation = new PatientInformation();
            SetDicomValues(importValues, patientInformation);
            patientInformation.Age = patientInformation.Age > 0 ? patientInformation.Age : PatientHelper.CalculateAge(patient.BirthDate, DateTime.Today);
            patientInformation.Gender = patient.Gender;
            report.PatientAge = patientInformation.Age ?? 0;

            var localizationPageInfo = report.Pages.Single(p => p.TypeName == _moduleContext.LocalizationPageName);
            localizationPageInfo.PageId = await CreateLocalizationPageAndImport(importValues, patientInformation, report.Id);
        }

        protected virtual Task<Guid> CreateLocalizationPageAndImport(ICollection<StringImportValue> importValues, PatientInformation patientInformation,
            Guid reportId) => throw new NotImplementedException();

        protected virtual Task<Guid> CreateTechnologyPageAndImport(ICollection<SeriesImportValue> seriesImportValues, Guid reportId) =>
            throw new NotImplementedException();

        protected void SetDicomValues(ICollection<StringImportValue> importValues, object instance)
        {
            if (instance == null) throw new ArgumentNullException(nameof(instance));

            foreach (var property in instance.GetType().GetProperties())
            {
                var rrIdAttribute = property.GetCustomAttribute<RadioReportIdAttribute>();
                if (rrIdAttribute == null) continue;

                var matchingValue = importValues.FirstOrDefault(v => v.RadioReportId == rrIdAttribute.Id);
                if (matchingValue?.Value == null) continue;

                try
                {
                    SetDicomValue(property, instance, matchingValue);
                }
                catch (Exception exception)
                {
                    _logger.LogError(exception, $"Writing dicom value for {property.Name} failed", matchingValue.Value);
                }
            }
        }

        private void SetDicomValue(PropertyInfo property, object instance, StringImportValue importValue)
        {
            var propertyType = property.PropertyType;
            object value;

            if (propertyType.IsEnum)
            {
                value = _dicomValueParser.ParseStringifiedEnum(importValue, propertyType);
            }
            else if (propertyType == typeof(DateTime))
            {
                value = _dicomValueParser.ParseDate(importValue);
            }
            else if (propertyType == typeof(bool))
            {
                value = _dicomValueParser.ParseStringifiedBoolean(importValue);
            }
            else if (propertyType == typeof(int))
            {
                value = _dicomValueParser.ParseInt(importValue);
            }
            else if (property.DeclaringType == typeof(PatientInformation) && property.Name == nameof(PatientInformation.Age))
            {
                value = _dicomValueParser.ParseAgeString(importValue);
            }
            else
            {
                value = importValue.Value;
            }

            if (value != default)
            {
                property.SetValue(instance, value);
            }
        }

        private void SetPatientNameIfAvailable(PatientDto dto)
        {
            var (firstName, lastName) = _dicomValueParser.ParseName(dto.Name);
            dto.FirstName = firstName;
            dto.LastName = lastName;
        }

        private async Task<Patient> GetOrAddPatient(PatientDto dto)
        {
            var patientRequest = new GetOrAddPatientSyncRequest
            {
                PatientDto = dto
            };
            var patientResponse = await _kafkaProducer.SendSynchronousRequest<GetOrAddPatientSyncResponse>(patientRequest, _httpAuthContext);
            if (!patientResponse.IsSuccess) throw new GetOrAddPatientFailedException($"Request {patientRequest.AsIndentedJson()}");

            return patientResponse.PatientDto.MapToPatient(_httpAuthContext);
        }

        public virtual Task<Report> UpdateAfterCreate(Report result) => Task.FromResult(result);
    }
}
