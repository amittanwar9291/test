using System;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.Kafka.Responses;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models;
using RadioReport.Common.Module.Logic.Services;
using Xunit;
using static RadioReport.Tests.Helpers.FakeHelper;

namespace RadioReport.Tests.Common.LogicTests
{
    public class LicenseServiceTests
    {
        private readonly LicenseService _classUnderTest;
        private readonly IReportManager _reportManagerFake;
        private readonly IKafkaProducer _kafkaProducerFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly IReportSessionManager _reportSessionManagerFake;
        private readonly ICacheService _cacheServiceFake;

        public LicenseServiceTests()
        {
            _reportManagerFake = A.Fake<IReportManager>();
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _reportSessionManagerFake = A.Fake<IReportSessionManager>();
            _cacheServiceFake = A.Fake<ICacheService>();
            var loggerFake = A.Fake<ILogger<LicenseService>>();
            _classUnderTest = new LicenseService(_reportManagerFake, _kafkaProducerFake, _httpAuthContextFake, _reportSessionManagerFake, loggerFake,
                _cacheServiceFake);
        }

        [Fact]
        public async Task VerifyLicense_NotLicensed_IncrementRequested()
        {
            // Arrange
            var expectedReportId = Guid.NewGuid();
            var generationParams = new ReportTextGenerationParams
            {
                ReportId = expectedReportId,
                LanguageCode = "de-DE",
                ReportTypeName = "Doctor"
            };
            var expectedInstituteId = Guid.NewGuid();
            var expectedLicenseId = Guid.NewGuid();
            var expectedReportSessionId = Guid.NewGuid();
            var report = new Report { Id = expectedReportId };
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.NewGuid());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(expectedInstituteId);
            var reportSession = ReportSession.Create(expectedReportId, _httpAuthContextFake);
            reportSession.Id = expectedReportSessionId;
            A.CallTo(() => _reportManagerFake.GetByIdAsync(expectedReportId, null)).Returns(report);
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(expectedReportId)).Returns(reportSession);
            FakeIncrementResult(expectedLicenseId, true);

            // Act
            await _classUnderTest.VerifyLicense(generationParams);

            // Assert
            AssertIncrementRequested(expectedInstituteId);
        }

        [Theory]
        [InlineData(ReportStatus.Exported)]
        [InlineData(ReportStatus.Generated)]
        [InlineData(ReportStatus.Completed)]
        [InlineData(ReportStatus.Approved)]
        public async Task VerifyLicense_LicensedCreditExistsFinishedStatus_NoAction(ReportStatus status)
        {
            // Arrange
            var report = new Report
            {
                Id = Guid.NewGuid(),
                LicenseFractionId = Guid.NewGuid(),
                Status = status
            };
            var generationParams = new ReportTextGenerationParams
            {
                ReportId = report.Id
            };
            FakeWalkThrough(report);
            FakeCreditExists(true, new ReportCredit());

            // Act
            await _classUnderTest.VerifyLicense(generationParams);

            // Assert
            AssertIncrementNotCalled();
            AssertLatestCreditNotCalled();
        }

        [Fact]
        public async Task VerifyLicense_LicensedCreditExistsNotFinishedStatusSameSession_NoAction()
        {
            // Arrange
            var report = new Report
            {
                Id = Guid.NewGuid(),
                LicenseFractionId = Guid.NewGuid(),
                Status = ReportStatus.InProgress
            };
            var generationParams = new ReportTextGenerationParams
            {
                ReportId = report.Id
            };
            var reportSessionId = Guid.NewGuid();
            FakeWalkThrough(report, reportSessionId);
            FakeCreditExists(true, new ReportCredit { ReportSessionId = reportSessionId });

            // Act
            await _classUnderTest.VerifyLicense(generationParams);

            // Assert
            AssertIncrementNotCalled();
        }

        [Fact]
        public async Task VerifyLicense_LicensedCreditExistsNotFinishedStatusNotSameSession_IncrementRequested()
        {
            // Arrange
            var expectedInstituteId = Guid.NewGuid();
            var expectedLicenseId = Guid.NewGuid();
            var expectedReportId = Guid.NewGuid();
            var expectedReportSessionId = Guid.NewGuid();
            var report = new Report
            {
                Id = expectedReportId,
                LicenseFractionId = Guid.NewGuid(),
                Status = ReportStatus.InProgress
            };
            var generationParams = new ReportTextGenerationParams
            {
                ReportId = expectedReportId,
                LanguageCode = "de-DE",
                ReportTypeName = "Doctor"
            };
            FakeWalkThrough(report);
            FakeCreditExists(true, new ReportCredit());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(expectedInstituteId);
            var reportSession = ReportSession.Create(expectedReportId, _httpAuthContextFake);
            reportSession.Id = expectedReportSessionId;
            A.CallTo(() => _reportManagerFake.GetByIdAsync(expectedReportId, null)).Returns(report);
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(expectedReportId)).Returns(reportSession);
            FakeIncrementResult(expectedLicenseId, true);

            // Act
            await _classUnderTest.VerifyLicense(generationParams);

            // Assert
            AssertIncrementRequested(expectedInstituteId);
        }

        [Fact]
        public async Task VerifyLicense_NotLicensedIncrementFailedBecauseExhausted_ExceptionThrown()
        {
            // Arrange
            var expectedReportId = Guid.NewGuid();
            var generationParams = new ReportTextGenerationParams
            {
                ReportId = expectedReportId,
                LanguageCode = "de-DE",
                ReportTypeName = "Doctor"
            };
            var expectedReportSessionId = Guid.NewGuid();
            var report = new Report { Id = expectedReportId };
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.NewGuid());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.NewGuid());
            var reportSession = ReportSession.Create(expectedReportId, _httpAuthContextFake);
            reportSession.Id = expectedReportSessionId;
            A.CallTo(() => _reportManagerFake.GetByIdAsync(expectedReportId, null)).Returns(report);
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(expectedReportId)).Returns(reportSession);
            FakeIncrementResult(Guid.NewGuid(), true, LicenseScoreType.Exhausted);

            // Act + Assert
            await Assert.ThrowsAsync<LicenseExhaustedException>(() => _classUnderTest.VerifyLicense(generationParams));
        }

        private void FakeWalkThrough(Report report, Guid reportSessionId = default)
        {
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.NewGuid());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.NewGuid());
            var reportSession = ReportSession.Create(report.Id, _httpAuthContextFake);
            reportSession.Id = reportSessionId;
            A.CallTo(() => _reportManagerFake.GetByIdAsync(report.Id, null)).Returns(report);
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(report.Id)).Returns(reportSession);
        }

        private void FakeCreditExists(bool exists, ReportCredit reportCredit)
        {
            A.CallTo(() => _cacheServiceFake.Exists(IgnoredString)).Returns(exists);
            if (exists)
            {
                A.CallTo(() => _cacheServiceFake.Get(IgnoredString)).Returns(reportCredit.AsJson());
            }
        }

        private void FakeIncrementResult(Guid expectedLicenseId, bool isIncrementSuccess, LicenseScoreType scoreType = LicenseScoreType.Valid)
        {
            var incrementResult = new LicenseIncrementResult(LicenseExpirationType.Valid, scoreType, true);
            var syncResponse = new LicenseIncrementSyncResponse
            {
                IsSuccess = isIncrementSuccess,
                LicenseFractionId = expectedLicenseId,
                IncrementResult = incrementResult,
            };
            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<LicenseIncrementSyncResponse>(A<LicenseIncrementSyncRequest>.Ignored, _httpAuthContextFake,
                    IgnoredInt, IgnoredCt))
                .Returns(syncResponse);
        }

        private void AssertIncrementRequested(Guid expectedInstituteId)
        {
            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<LicenseIncrementSyncResponse>(A<LicenseIncrementSyncRequest>.That.Matches(r =>
                r.Topic == KafkaTopic.Request.LicenseIncrementSync
            ), A<HttpAuthContext>.That.Matches(c =>
                c.InstituteId == expectedInstituteId
            ), IgnoredInt, IgnoredCt)).MustHaveHappened();
        }

        private void AssertIncrementNotCalled() =>
            A.CallTo(() => _kafkaProducerFake.SendSynchronousRequest<LicenseIncrementSyncResponse>(A<LicenseIncrementSyncRequest>.Ignored, IgnoredAuth,
                    IgnoredInt, IgnoredCt))
                .MustNotHaveHappened();

        private void AssertLatestCreditNotCalled() => A.CallTo(() => _cacheServiceFake.Get(IgnoredString)).MustNotHaveHappened();
    }
}
