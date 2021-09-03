using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models;

namespace RadioReport.Common.Module.Logic.Services
{
    public class LicenseService : ILicenseService
    {
        private readonly IReportManager _reportManager;
        private readonly IKafkaProducer _kafkaProducer;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly IReportSessionManager _reportSessionManager;
        private readonly ILogger<LicenseService> _logger;
        private readonly ICacheService _cacheService;

        public LicenseService(
            IReportManager reportManager,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            IReportSessionManager reportSessionManager,
            ILogger<LicenseService> logger,
            ICacheService cacheService
        )
        {
            _reportManager = reportManager;
            _kafkaProducer = kafkaProducer;
            _httpAuthContext = httpAuthContext;
            _reportSessionManager = reportSessionManager;
            _logger = logger;
            _cacheService = cacheService;
        }

        public async Task VerifyLicense(ReportTextGenerationParams generationParams)
        {
            if (generationParams == null) throw new ArgumentNullException(nameof(generationParams));

            var report = await _reportManager.GetByIdAsync(generationParams.ReportId);
            if (report == null) throw new ReportNotFoundException(generationParams.ReportId);

            var reportSession = await _reportSessionManager.GetByReportId(report.Id);
            if (reportSession == null) throw new MissingReportSessionException($"No report session found for report {report.Id}");

            if (NotLicensedYet(report))
            {
                await RequestLicenseIncrement(report, reportSession.Id, generationParams);

                return;
            }

            if (await ReportCreditExists(report.Id))
            {
                await DecideFromStatus(report, true, reportSession, generationParams);

                return;
            }

            if (!await LastReportCreditPurgeAfterLicensing())
            {
                _logger.LogWarning("Possible license fraud");
            }

            await DecideFromStatus(report, false, reportSession, generationParams);
        }

        private static bool NotLicensedYet(Report report) => report.LicenseFractionId.IsEmpty();

        private async Task RequestLicenseIncrement(Report report, Guid reportSessionId, ReportTextGenerationParams generationParams)
        {
            if (generationParams.LanguageCode.IsNullOrEmpty() || generationParams.ReportTypeName.IsNullOrEmpty())
                throw new InvalidOperationException("Language code and report type name are necessary for license request");

            var licenseIncrementRequest = new LicenseIncrementSyncRequest(
                generationParams.IsIcd10,
                generationParams.LanguageCode,
                ParseReportTypeName(generationParams.ReportTypeName)
            );
            var incrementResponse = await _kafkaProducer.SendSynchronousRequest<LicenseIncrementSyncResponse>(licenseIncrementRequest, _httpAuthContext,
                ConfigurationConsts.LicenseIncrementKafkaSyncRequestTimeoutMs);
            if (!incrementResponse.IsSuccess) throw new IncrementLicenseFailedException("Incrementing license failed", incrementResponse.Error);

            if (!incrementResponse.IncrementResult.AreGenerationParamsLicensed)
                throw new NotLicensedOperationException("License increment request with unlicensed generation params");
            if (incrementResponse.IncrementResult.IsExhausted)
                throw new LicenseExhaustedException($"License of institute {_httpAuthContext.InstituteId} exhausted");
            if (incrementResponse.IncrementResult.IsExpired)
                throw new LicenseExpiredException($"License of institute {_httpAuthContext.InstituteId} expired");
            if (!incrementResponse.IncrementResult.IsSuccess)
                throw new InconsistentStateException("License increment request not successful despite valid");

            await AddReportCredit(report.Id, reportSessionId, incrementResponse.LicenseFractionId);
            await UpdateLicenseData(report, incrementResponse.LicenseFractionId);
        }

        private async Task AddReportCredit(Guid reportId, Guid reportSessionId, Guid licenseFractionId)
        {
            if (licenseFractionId.IsEmpty()) throw new InconsistentStateException("Adding report credit without license id");

            var reportCredit = new ReportCredit(reportId, reportSessionId, licenseFractionId);
            await _cacheService.Set(RedisKeyHelper.ReportCredit(reportId), reportCredit.AsJson(), TimeSpan.FromHours(Redis.Expirations.ReportCreditHours));
        }

        private async Task UpdateLicenseData(Report report, Guid licenseFractionId)
        {
            report.LicenseFractionId = licenseFractionId;
            report.LicensingDate = DateTime.Now.ToUniversalTime();
            await _reportManager.UpdateAsync(report);
        }

        private async Task DecideFromStatus(Report report, bool reportCreditExists, ReportSession reportSession, ReportTextGenerationParams generationParams)
        {
            if (HasFinishedStatus(report)) return;

            if (reportCreditExists)
            {
                var reportCredit = (await _cacheService.Get(RedisKeyHelper.ReportCredit(report.Id))).Deserialize<ReportCredit>();
                if (SameSession(reportCredit, reportSession)) return;
            }

            await RequestLicenseIncrement(report, reportSession.Id, generationParams);
        }

        private static bool HasFinishedStatus(Report report) => report.Status == ReportStatus.Exported || report.Status == ReportStatus.Generated ||
                                                                report.Status == ReportStatus.Completed || report.Status == ReportStatus.Approved;

        private async Task<bool> ReportCreditExists(Guid reportId) => await _cacheService.Exists(RedisKeyHelper.ReportCredit(reportId));

        private static bool SameSession(ReportCredit reportCredit, ReportSession reportSession) =>
            !reportCredit.ReportSessionId.IsEmpty() &&
            !reportSession.Id.IsEmpty() &&
            reportCredit.ReportSessionId == reportSession.Id;

        private static Task<bool> LastReportCreditPurgeAfterLicensing()
        {
            // TODO add retrieval of last purge timestamp after adding report credit purge scheduling
            return Task.FromResult(false);
        }

        private static ReportTypes ParseReportTypeName(string reportTypeName)
        {
            if (reportTypeName.Contains("DOCTOR", StringComparison.InvariantCultureIgnoreCase))
                return ReportTypes.Doctor;
            if (reportTypeName.Contains("PATIENT", StringComparison.InvariantCultureIgnoreCase))
                return ReportTypes.Patient;

            throw new UnknownReportTypeNameException($"Report type name {reportTypeName} cannot be parsed");
        }
    }
}
