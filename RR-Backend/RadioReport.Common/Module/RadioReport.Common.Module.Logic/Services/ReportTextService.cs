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
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RadioReport.Common.Module.Logic.Services
{
    public class ReportTextService : IReportTextService
    {
        private readonly IReportManager _reportManager;
        private readonly IReportGenerationManager _reportGenerationManager;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IReportService _reportService;
        private readonly IReportPageService _reportPageService;
        private readonly IKafkaProducer _kafkaProducer;

        public ReportTextService(
            IReportManager reportManager,
            IReportGenerationManager reportGenerationManager,
            HttpAuthContext httpAuthContext,
            IReportService reportService,
            IReportPageService reportPageService,
            IKafkaProducer kafkaProducer
        )
        {
            _reportManager = reportManager;
            _reportGenerationManager = reportGenerationManager;
            _httpAuthContext = httpAuthContext;
            _reportService = reportService;
            _reportPageService = reportPageService;
            _kafkaProducer = kafkaProducer;
        }

        public async Task<ReportResult> GenerateTextReport(ReportTextGenerationParams parameter)
        {
            if (parameter == null) throw new ArgumentNullException(nameof(parameter));

            var report = await _reportManager.GetByIdAsync(parameter.ReportId, new[] { nameof(Report.Pages) });
            if (report == null)
            {
                throw new ReportNotFoundException(parameter.ReportId);
            }

            if (_httpAuthContext.UserRole == UserRole.Viewer &&
                report.Status != ReportStatus.Exported &&
                report.Status != ReportStatus.Approved &&
                report.Status != ReportStatus.Completed)
            {
                throw new UnauthorizedAccessException();
            }

            var exisitingResult = await _reportService.GetExistingReportResult(parameter.ReportId, parameter.ReportTypeName);
            var result = new ReportResult
            {
                ReportId = parameter.ReportId,
                ReportTypeName = parameter.ReportTypeName,
                PatientData = exisitingResult?.PatientData,
                Discussion = exisitingResult?.Discussion,
                Id = exisitingResult?.Id ?? Guid.Empty,
                InstituteId = exisitingResult?.InstituteId ?? _httpAuthContext.InstituteId,
                // flags below based on request parameters, not state saved in db
                IsICD10 = parameter.IsIcd10,
                IsLocalizer = parameter.LocalizerType != LocalizerType.None,
                IsReferenceImage = parameter.IsReferenceImage,
                Approved = exisitingResult?.Approved,
                ReportSummary = exisitingResult?.ReportSummary
            };

            var reportData = (await GetDataForTextReport(report)).ToList();
            if (reportData.IsNullOrEmpty())
            {
                return result;
            }

            var reportDataGrouping = reportData.GroupBy(d => d.RadioReportId);
            var duplicates = reportDataGrouping.Where(g => g.Count() > 1);
            if (duplicates.Any())
            {
#if DEBUG
                var sb = new StringBuilder();
                foreach (var duplicate in duplicates)
                {
                    sb.AppendLine(duplicate.Key);
                }

                throw new ReportGenerationFailureException($"Duplicate rrid's found:\n{sb}");
#else
                    reportData = reportDataGrouping.Select(g => g.First()).ToList();
#endif
            }

            await _reportGenerationManager.GenerateAndAppendTextReport(result, parameter.LanguageCode, parameter.LocalizerType, parameter.LocalizerBackground,
                reportData);

            if (exisitingResult is null)
            {
                exisitingResult = result;
            }
            exisitingResult.ReportSummary = result.ReportSummary;
            await _reportService.UpdateReportResult(exisitingResult);

            return result;
        }

        private async Task<IEnumerable<RadioReportValue>> GetDataForTextReport(Report report)
        {
            if (report == null) throw new ArgumentNullException(nameof(report));

            var result = new List<RadioReportValue>();
            if (report.Pages == null || report.Pages.Count <= 0)
            {
                return result;
            }

            var getPatientValuesTask = CreateGetPatientReportValuesTask(report);
            var getPageValuesTask = CreateGetPageReportValuesTask(report);
            await Task.WhenAll(getPatientValuesTask, getPageValuesTask);

            result.AddRange(getPatientValuesTask.Result);
            result.AddRange(getPageValuesTask.Result);

            return result;
        }

        private Task<List<RadioReportValue>> CreateGetPatientReportValuesTask(Report report) =>
            Task.Run(async () =>
            {
                var result = new List<RadioReportValue>();
                var patientRequest = new GetPatientSyncRequest
                {
                    PatientId = report.PatientId
                };
                var patientResponse = await _kafkaProducer.SendSynchronousRequest<GetPatientSyncResponse>(patientRequest, _httpAuthContext);
                if (!patientResponse.IsSuccess) throw new PatientNotFoundException(report.PatientId);
                var patient = patientResponse.PatientDto.MapToPatient(_httpAuthContext);

                result.AddRange(GetPatientDataValues(report, patient));

                return result;
            });

        private Task<List<RadioReportValue>> CreateGetPageReportValuesTask(Report report) =>
            Task.Run(async () =>
            {
                var result = new List<RadioReportValue>();
                foreach (var page in report.Pages)
                {
                    var pageManager = _reportPageService.GetPageManager(page);
                    if (pageManager == null)
                    {
                        continue;
                    }

                    var pageValues = await pageManager.GetValuesForReport(page.PageId);
                    if (!pageValues.IsNullOrEmpty())
                    {
                        result.AddRange(pageValues);
                    }
                }

                return result;
            });

        private static IEnumerable<RadioReportValue> GetPatientDataValues(Report report, Patient patient) =>
            new List<RadioReportValue>
            {
                new RadioReportValue
                {
                    RadioReportId = ReportConsts.PatientFirstNameTag,
                    Value = patient.FirstName
                },
                new RadioReportValue
                {
                    RadioReportId = ReportConsts.PatientLastNameTag,
                    Value = patient.LastName
                },
                new RadioReportValue
                {
                    RadioReportId = ReportConsts.PatientDateOfBirthTag,
                    Value = patient.BirthDate.ToShortDateString()
                },
                new RadioReportValue
                {
                    RadioReportId = ReportConsts.PatientDateOfExaminationTag,
                    Value = report.ExaminationDate.ToShortDateString()
                }
            };
    }
}
