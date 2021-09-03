using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Consts;
using RadioReport.Common.Core.Logic.Interfaces;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Common.Logic.Models.InstituteModels;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Logic.Resources;
using RadioReport.Common.Models;
using RadioReport.Core.ExportInterface.Domain.Consts;
using RadioReport.Core.ExportInterface.Domain.Interfaces;

namespace RadioReport.Core.ExportInterface.Domain.Managers
{
    public class ExportHttpManager : IExportHttpManager
    {
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ICacheService _cacheService;
        private readonly IHtmlTemplateService _htmlTemplateService;
        private readonly IInstituteLogoService _instituteLogoService;
        private readonly IExportService _exportService;

        public ExportHttpManager(
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            ICacheService cacheService,
            IHtmlTemplateService htmlTemplateService,
            IInstituteLogoService instituteLogoService,
            IExportService exportService)
        {
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
            _cacheService = cacheService;
            _htmlTemplateService = htmlTemplateService;
            _instituteLogoService = instituteLogoService;
            _exportService = exportService;
        }

        public async Task<JObject> Export(ExportRequest exportRequest, bool duplicateExternalIdentifierAllowed)
        {
            if (exportRequest == null) throw new ArgumentNullException(nameof(exportRequest));

            if ((!exportRequest.ReportId.HasValue || exportRequest.ReportId.Value.IsEmpty()) &&
                exportRequest.StudyInstanceUid.IsNullOrEmpty() && exportRequest.AccessionNumber.IsNullOrEmpty())
                throw new InvalidArgumentException(string.Format(CultureInfo.InvariantCulture, ErrorMessageResources.InvalidArgument, "Identifier missing"));

            var exportSyncRequest = new GetReportExportSyncRequest()
            {
                ExportRequest = exportRequest
            };

            await _kafkaProducer.WriteMessage(KafkaTopic.Request.ExportReport, exportSyncRequest.AsJson(), _httpAuthContext, exportSyncRequest.CacheKey);

            try
            {
                var acknowledgeTimeoutTask = Task.Delay(TimeSpan.FromSeconds(10));
                var acknowledgeList = new List<string>();

                var _ = Task.Run(async () =>
                {
                    while (!acknowledgeTimeoutTask.IsCompleted)
                    {
                        var currentAcknowledgeList = (await _cacheService.GetList(RedisKeyHelper.AcknowledgeExport(exportSyncRequest.CacheKey))).ToList();
                        if (currentAcknowledgeList != acknowledgeList)
                        {
                            acknowledgeTimeoutTask = Task.Delay(TimeSpan.FromSeconds(10));
                            acknowledgeList = currentAcknowledgeList;
                        }

                        await Task.Delay(2);
                    }
                }).ConfigureAwait(false);

                var exportTimeout = Task.Delay(ConfigurationConsts.ExportReportTimeout);
                var exportListIndex = 0;
                var exportFormatList = new List<JObject>();
                while (!exportTimeout.IsCompleted)
                {
                    var exportList = (await _cacheService.GetList(exportSyncRequest.CacheKey)).ToList();
                    if (exportList.Count != 0 && exportList.Count > exportListIndex)
                    {
                        for (var i = exportListIndex; i <= exportList.Count - 1; i++)
                        {
                            var exportResponse = exportList[i].Deserialize<GetReportExportSyncResponse>();
                            if (!exportResponse.IsSuccess)
                                throw exportResponse.Error ?? new KafkaSyncRequestFailedException($"Export of report {exportRequest.ReportId} failed");

                            if (exportResponse.ReportResult?.ReportHtml == null) throw new KafkaSyncRequestFailedException("No report html retrieved");

                            exportFormatList.Add(_exportService.FormatExport(exportRequest.ExportFormatType, exportResponse.ReportResult.ReportHtml,
                                exportRequest.LanguageCode));
                        }

                        exportListIndex = exportList.Count;
                    }

                    if (exportFormatList.Count == acknowledgeList.Count && acknowledgeList.Count > 0)
                    {
                        if (!duplicateExternalIdentifierAllowed && exportFormatList.Count > 1)
                            throw new InvalidArgumentException(ErrorMessageResources.Export_DuplicateExternalIdentifierNotAllowed);

                        var setReportStatusRequest = new SetReportStatusRequest()
                        {
                            ReportId = exportRequest.ReportId,
                            StudyInstanceUid = exportRequest.StudyInstanceUid,
                            Status = ReportStatus.Exported
                        };

                        await _kafkaProducer.WriteMessage(KafkaTopic.Request.SetReportStatus, setReportStatusRequest.AsJson(), _httpAuthContext);

                        var result = new JObject();
                        if (exportFormatList.Count == 1)
                        {
                            result = exportFormatList[0];

                            return result;
                        }
                        else if (exportFormatList.Count > 0)
                        {
                            result["exports"] = JToken.FromObject(exportFormatList);

                            return result;
                        }
                    }

                    if (acknowledgeTimeoutTask.IsCompleted && acknowledgeList.Count == 0)
                        throw new NotFoundException(ErrorMessageResources.Export_NoMatchingReportFound);

                    await Task.Delay(5);
                }
            }
            finally
            {
                await _cacheService.Remove(RedisKeyHelper.AcknowledgeExport(exportSyncRequest.CacheKey));
                await _cacheService.Remove(exportSyncRequest.CacheKey);
            }

            throw new SynchronousKafkaTimedOutException(ErrorMessageResources.Export_Timeout);
        }

        public async Task<string> ExportReport(ExportReportRequest exportReportRequest)
        {
            if (exportReportRequest == null) throw new ArgumentNullException(nameof(exportReportRequest));

            var exportReportData = await GetReportExportData(exportReportRequest);
            var patientTask = GetPatientTask(exportReportData.Report.PatientId);
            var userInfoTask = GetUserInfoTask(exportReportData.Report.UserId);
            var instituteLogoTask = GetInstituteLogoTask();
            var htmlTemplatesTask = _htmlTemplateService.GetHtmlTemplates();
            var instituteTask = GetInstituteTask();

            await Task.WhenAll(patientTask, userInfoTask, instituteLogoTask, htmlTemplatesTask, instituteTask).ConfigureAwait(false);

            var htmlTemplateRenderRequest = ReplacePlaceholder(exportReportData.ReportResult, exportReportData.Report, patientTask.Result,
                userInfoTask.Result.User, instituteLogoTask.Result, htmlTemplatesTask.Result, instituteTask.Result);

            var htmlResponse = await _kafkaProducer.SendSynchronousRequest<HtmlRenderResponse>(htmlTemplateRenderRequest, _httpAuthContext);
            if (htmlResponse.IsSuccess) return htmlResponse.RenderContent;

            throw new KafkaSyncRequestFailedException("Render html request failed.");
        }

        private static HtmlTemplateRenderRequest ReplacePlaceholder(ReportResult reportResult, Report report, Patient patient, IUser user,
            InstituteLogo instituteLogo, HtmlTemplates htmlTemplates, Institute institute)
        {
            var placeholderDict = PopulatePlacerholderDict(patient, instituteLogo, user, reportResult, report,
                htmlTemplates.HtmlConfiguration.DateFormat, institute);
            var bodyHtml = htmlTemplates.Body;
            var headerHtml = htmlTemplates.Header;
            var footerHtml = htmlTemplates.Footer;

            foreach (var placeholder in placeholderDict)
            {
                bodyHtml = bodyHtml?.Replace(placeholder.Key, placeholder.Value,
                    StringComparison.CurrentCultureIgnoreCase);
                headerHtml = headerHtml?.Replace(placeholder.Key, placeholder.Value,
                    StringComparison.CurrentCultureIgnoreCase);
                footerHtml = footerHtml?.Replace(placeholder.Key, placeholder.Value,
                    StringComparison.CurrentCultureIgnoreCase);
            }

            var htmlTemplateRenderRequest = new HtmlTemplateRenderRequest()
            {
                BodySection = bodyHtml,
                HeaderSection = headerHtml,
                FooterSection = footerHtml,
                CssSection = htmlTemplates.Css,
                BottomMargin = htmlTemplates.HtmlConfiguration.BottomMargin,
                LeftMargin = htmlTemplates.HtmlConfiguration.LeftMargin,
                RightMargin = htmlTemplates.HtmlConfiguration.RightMargin,
                TopMargin = htmlTemplates.HtmlConfiguration.TopMargin,
                PaperFormat = htmlTemplates.HtmlConfiguration.PaperFormat,
                CacheReturn = true
            };

            return htmlTemplateRenderRequest;
        }

        private static Dictionary<string, string> PopulatePlacerholderDict(Patient patient, InstituteLogo instituteLogo,
            IUser userViewModel, ReportResult reportResult, Report report, string dateFormat, Institute institute)
        {
            var placeholderDict = new Dictionary<string, string>
            {
                { HtmlTemplatePlaceholder.PatientFirstName, patient.FirstName },
                { HtmlTemplatePlaceholder.PatientLastName, patient.LastName },
                { HtmlTemplatePlaceholder.PatientGender, patient.Gender.ToString() },
                { HtmlTemplatePlaceholder.PatientBirthday, patient.BirthDate.ToShortDateString() },

                { HtmlTemplatePlaceholder.InstituteLogo, $"<img src=data:image/gif;base64,{instituteLogo?.Content} />" },
                { HtmlTemplatePlaceholder.InstituteName, institute?.Name },
                { HtmlTemplatePlaceholder.InstituteAddressCountry, institute?.Address?.Properties.Country },
                { HtmlTemplatePlaceholder.InstituteAddressCity, institute?.Address?.Properties.City },
                { HtmlTemplatePlaceholder.InstituteAddressStreet, institute?.Address?.Properties.Street },
                { HtmlTemplatePlaceholder.InstituteAddressHouseNumber, institute?.Address?.Properties.Housenumber },
                { HtmlTemplatePlaceholder.InstituteAddressPostCode, institute?.Address?.Properties.Postcode },
                { HtmlTemplatePlaceholder.InstituteAddressState, institute?.Address?.Properties.State },
                { HtmlTemplatePlaceholder.InstituteAddressCountryCode, institute?.Address?.Properties.Countrycode },

                { HtmlTemplatePlaceholder.DoctorFirstName, userViewModel.FirstName },
                { HtmlTemplatePlaceholder.DoctorLastName, userViewModel.Surname },
                { HtmlTemplatePlaceholder.DoctorTitle, userViewModel.Title.ToString() },
                { HtmlTemplatePlaceholder.DoctorDisciplin, userViewModel.Surname },
                { HtmlTemplatePlaceholder.DoctorSignature, userViewModel.Surname },

                { HtmlTemplatePlaceholder.ReportText, reportResult.ReportHtml },

                { HtmlTemplatePlaceholder.ReportDate, report?.FindingsDate.ToString(dateFormat, CultureInfo.InvariantCulture) },
                { HtmlTemplatePlaceholder.CurrentDate, DateTime.Now.ToString(dateFormat, CultureInfo.InvariantCulture) }
            };

            return placeholderDict;
        }

        private async Task<Institute> GetInstituteTask()
        {
            var getInstituteSyncRequest = new GetInstituteSyncRequest()
            {
                InstituteId = _httpAuthContext.InstituteId,
                Level = InstituteDetailLevel.WithAddress
            };

            var instituteSyncResponse =
                await _kafkaProducer.SendSynchronousRequest<GetInstituteSyncResponse>(getInstituteSyncRequest,
                    _httpAuthContext);
            if (instituteSyncResponse.IsSuccess) return instituteSyncResponse.Institute;

            throw new KafkaSyncRequestFailedException($"Insitute with id {_httpAuthContext.InstituteId} not found.");
        }

        private async Task<InstituteLogo> GetInstituteLogoTask()
        {
            try
            {
                return await _instituteLogoService.GetInstituteLogo();
            }
            catch
            {
                return null;
            }
        }

        private async Task<GetReportExportSyncResponse> GetReportExportData(ExportReportRequest exportReportRequest)
        {
            var getReportExportSyncRequest = new GetReportExportSyncRequest(exportReportRequest.ModuleType)
            {
                ExportRequest = new ExportRequest()
                {
                    ReportId = exportReportRequest.ReportId,
                    InstituteId = _httpAuthContext.InstituteId,
                    LanguageCode = exportReportRequest.LanguageCode,
                    AddReport = true
                }
            };

            try
            {
                var exportResponse = await _kafkaProducer.SendSynchronousRequest<GetReportExportSyncResponse>(getReportExportSyncRequest, _httpAuthContext);
                if (exportResponse.IsSuccess) return exportResponse;

                throw new KafkaSyncRequestFailedException($"Report with id {exportReportRequest.ReportId} not found.");
            }
            finally
            {
                await _cacheService.Remove(getReportExportSyncRequest.CacheKey);
            }
        }

        private async Task<Patient> GetPatientTask(Guid patientId)
        {
            var getPatientSyncRequest = new GetPatientSyncRequest()
            {
                PatientId = patientId
            };
            var patientResponse = await _kafkaProducer.SendSynchronousRequest<GetPatientSyncResponse>(getPatientSyncRequest, _httpAuthContext);
            if (!patientResponse.IsSuccess) throw new PatientNotFoundException(patientId);

            return patientResponse.PatientDto.MapToPatient(_httpAuthContext);
        }

        private async Task<GetUserSyncResponse> GetUserInfoTask(Guid userId)
        {
            var getUserSyncRequest = new GetUserSyncRequest()
            {
                UserId = userId
            };
            var userResponse = await _kafkaProducer.SendSynchronousRequest<GetUserSyncResponse>(getUserSyncRequest, _httpAuthContext);
            if (userResponse.IsSuccess) return userResponse;

            throw new KafkaSyncRequestFailedException($"User with id {userId} not found.");
        }
    }
}
