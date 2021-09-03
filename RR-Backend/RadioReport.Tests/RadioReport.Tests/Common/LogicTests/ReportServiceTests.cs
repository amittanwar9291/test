using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FakeItEasy;
using RadioReport.Common.Consts;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Kafka.Requests;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class ReportServiceTests
    {
        private readonly ReportService _classUnderTest;
        private readonly IReportManager _reportManagerFake;
        private readonly IKafkaProducer _kafkaProducerFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly ModuleContext _moduleContextFake;
        private readonly IReportSessionManager _reportSessionManagerFake;
        private readonly IReportStatusService _reportStatusService;
        private readonly ICacheService _cacheServiceFake;
        private readonly EnvironmentContext _environmentContext;

        public ReportServiceTests()
        {
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _moduleContextFake = A.Fake<ModuleContext>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _reportManagerFake = A.Fake<IReportManager>();
            _reportSessionManagerFake = A.Fake<IReportSessionManager>();
            _reportStatusService = A.Fake<IReportStatusService>();
            _cacheServiceFake = A.Fake<ICacheService>();
            _environmentContext = A.Fake<EnvironmentContext>();
            _classUnderTest = new ReportService(_reportManagerFake, _kafkaProducerFake, _httpAuthContextFake, _moduleContextFake, _reportSessionManagerFake,
                _reportStatusService, _cacheServiceFake, _environmentContext);
        }

        [Theory]
        [MemberData(nameof(UpdatePageIdData))]
        public async void UpdatePageId_PageIdEmptyNotEmpty_PageIdSet(Guid pageIdBefore, Guid expectedPageId)
        {
            // Arrange
            const string pageTypeName = "thepagetypename";
            var report = new Report();
            report.Pages.Add(new PageInfo { TypeName = "any" });
            report.Pages.Add(new PageInfo
            {
                TypeName = pageTypeName,
                PageId = pageIdBefore
            });
            A.CallTo(() => _reportManagerFake.GetByIdAsync(A<Guid>.Ignored, A<string[]>.Ignored, A<Expression<Func<Report, bool>>>.Ignored)).Returns(report);

            // Act
            await _classUnderTest.UpdatePageId(Guid.NewGuid(), expectedPageId, pageTypeName);

            // Assert
            A.CallTo(() => _reportManagerFake.UpdateAsync(A<Report>.That.Matches(r =>
                r.Pages.Single(p => p.TypeName == pageTypeName).PageId == expectedPageId
            ))).MustHaveHappened();
        }

        public static IEnumerable<object[]> UpdatePageIdData =>
            new List<object[]>
            {
                new object[] { Guid.Empty, Guid.NewGuid() },
                new object[] { Guid.NewGuid(), Guid.Empty }
            };

        [Theory]
        [MemberData(nameof(UpdateStatusNoUpdateData))]
        public async void UpdateStatus_NoUpdateStatus_NoUpdate(ReportStatus statusBefore, ReportStatus updateStatus)
        {
            // Arrange
            var report = new Report { Status = statusBefore };
            A.CallTo(() => _reportManagerFake.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Report, bool>>>.Ignored)).Returns(report);

            // Act
            await _classUnderTest.UpdateStatus(Guid.NewGuid(), updateStatus);

            // Assert
            A.CallTo(() => _reportManagerFake.UpdateAsync(A<Report>.Ignored)).MustNotHaveHappened();
        }

        public static IEnumerable<object[]> UpdateStatusNoUpdateData =>
            new List<object[]>
            {
                new object[] { ReportStatus.Open, ReportStatus.Open },
                new object[] { ReportStatus.Approved, ReportStatus.Completed },
                new object[] { ReportStatus.Exported, ReportStatus.Completed },
            };

        [Theory]
        [MemberData(nameof(UpdateStatusUpdateData))]
        public async void UpdateStatus_ToUpdateStatus_StatusSet(ReportStatus statusBefore, ReportStatus updateStatus, ReportStatus exptectedStatus)
        {
            // Arrange
            var reportId = Guid.NewGuid();
            var report = new Report
            {
                Id = reportId,
                Status = statusBefore
            };
            A.CallTo(() => _reportManagerFake.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Report, bool>>>.Ignored)).Returns(report);
            var expectedUpdateJson = new UpdateReportRequest
            {
                ReportId = reportId,
                ReportStatus = exptectedStatus,
                IsLocked = false
            }.AsJson();

            // Act
            await _classUnderTest.UpdateStatus(Guid.NewGuid(), updateStatus);

            // Assert
            A.CallTo(() => _reportStatusService.UpdateReportStatusAsync(A<Guid>.Ignored, A<ReportStatus>.That.Matches(r =>
                r == exptectedStatus), A<bool>.Ignored)).MustHaveHappened();
        }

        public static IEnumerable<object[]> UpdateStatusUpdateData =>
            new List<object[]>
            {
                new object[] { ReportStatus.Open, ReportStatus.InProgress, ReportStatus.InProgress },
                new object[] { ReportStatus.InProgress, ReportStatus.Completed, ReportStatus.Completed },
            };

        [Fact]
        public async void CreateReportSession_ValidInput_UpdatesDelegated()
        {
            // Arrange
            var reportId = Guid.NewGuid();
            var report = new Report
            {
                Id = reportId,
                Status = ReportStatus.Approved
            };
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.NewGuid());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.NewGuid());
            var expectedUpdateJson = new UpdateReportRequest
            {
                ReportId = reportId,
                ReportStatus = ReportStatus.Approved,
                IsLocked = true
            }.AsJson();

            // Act
            await _classUnderTest.CreateReportSession(report);

            // Assert
            A.CallTo(() => _reportSessionManagerFake.AddAsync(A<ReportSession>.That.Matches(s =>
                s.ReportId == reportId
            ), A<bool>.Ignored)).MustHaveHappened();
        }

        [Fact]
        public async void RemoveReportSession_ValidInput_RemoveDelegated()
        {
            // Arrange
            var reportId = Guid.NewGuid();
            var expectedUpdateJson = new UpdateReportRequest
            {
                ReportId = reportId,
                ReportStatus = ReportStatus.Approved,
                IsLocked = false
            }.AsJson();
            var report = new Report
            {
                Id = reportId,
                Status = ReportStatus.Approved
            };
            A.CallTo(() => _reportManagerFake.GetByIdAsync(A<Guid>.Ignored, A<Expression<Func<Report, bool>>>.Ignored)).Returns(report);

            // Act
            await _classUnderTest.RemoveReportSession(reportId);

            // Assert
            A.CallTo(() => _reportSessionManagerFake.RemoveByReportId(reportId)).MustHaveHappened();
        }

        [Fact]
        public async void VerifyReportSession_NoSessionExist_NoSessionResultReturned()
        {
            // Arrange
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(A<Guid>.Ignored)).Returns((ReportSession) null);

            // Act
            var result = await _classUnderTest.VerifyReportSession(Guid.NewGuid());

            // Assert
            Assert.Equal(ReportSessionResult.NoSessionExists, result);
        }

        [Fact]
        public async void VerifyReportSession_IsSessionOwner_SessionOwnerResultReturned()
        {
            // Arrange
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.NewGuid());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.NewGuid());
            var session = ReportSession.Create(Guid.NewGuid(), _httpAuthContextFake);
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(A<Guid>.Ignored)).Returns(session);

            // Act
            var result = await _classUnderTest.VerifyReportSession(Guid.NewGuid());

            // Assert
            Assert.Equal(ReportSessionResult.SessionOwner, result);
        }

        [Fact]
        public async void VerifyReportSession_NotSessionOwner_ReportLockedReturned()
        {
            // Arrange
            var instituteId = Guid.NewGuid();
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.NewGuid());
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(instituteId);
            var session = ReportSession.Create(Guid.NewGuid(), new HttpAuthContext
            {
                UserId = Guid.NewGuid(),
                InstituteId = instituteId
            });
            A.CallTo(() => _reportSessionManagerFake.GetByReportId(A<Guid>.Ignored)).Returns(session);

            // Act
            var result = await _classUnderTest.VerifyReportSession(Guid.NewGuid());

            // Assert
            Assert.Equal(ReportSessionResult.ReportLocked, result);
        }
    }
}
