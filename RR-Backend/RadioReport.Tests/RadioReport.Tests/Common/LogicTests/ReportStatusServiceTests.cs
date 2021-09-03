using System;
using System.Threading;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Services;
using Xunit;

namespace RadioReport.Tests.Common.LogicTests
{
    public class ReportStatusServiceTests
    {
        private readonly ReportStatusService _classUnderTest;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly DbContext _dbContextFake;
        private readonly IKafkaProducer _kafkaProducerFake;
        private readonly EnvironmentContext _environmentContext;

        public ReportStatusServiceTests()
        {
            _dbContextFake = A.Fake<DbContext>();
            _kafkaProducerFake = A.Fake<IKafkaProducer>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _environmentContext = A.Fake<EnvironmentContext>();
            _classUnderTest = new ReportStatusService(_httpAuthContextFake, _dbContextFake, _kafkaProducerFake,_environmentContext);
        }
        
        [Fact]
        public async Task UpdateReportStatus_InvalidReport_ArgumentNullException()
        {
            // Act & Assert
            await Assert.ThrowsAsync<ArgumentNullException>(() => _classUnderTest.UpdateReportStatusAsync(null, ReportStatus.Approved, false));
        }
        
        [Fact]
        public async Task UpdateReportStatus_InvalidInstituteId_InvalidInstituteIdException()
        {
            //Arrange
            var report = new Report
            {
                Id = Guid.NewGuid(),
                LicenseFractionId = Guid.NewGuid(),
                Status = ReportStatus.InProgress
            };
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.NewGuid());
            
            // Act & Assert
            await Assert.ThrowsAsync<InvalidInstituteIdException>(() => _classUnderTest.UpdateReportStatusAsync(report, ReportStatus.Approved, false));
        }
        
        [Theory]
        [InlineData(ReportStatus.Unknown, ReportStatus.Approved)]
        [InlineData(ReportStatus.Open, ReportStatus.Approved)] 
        [InlineData(ReportStatus.InProgress, ReportStatus.Completed)] 
        [InlineData(ReportStatus.InProgress, ReportStatus.Exported)] 
        [InlineData(ReportStatus.Approved, ReportStatus.Canceled)] 
        [InlineData(ReportStatus.Exported, ReportStatus.Approved)] 
        public async Task UpdateReportStatus_InvalidStatusChange_InvalidReportStatusChangeException(ReportStatus current, ReportStatus newStatus)
        {
            //Arrange
            var instituteId = Guid.NewGuid();
            var report = new Report
            {
                Id = Guid.NewGuid(),
                LicenseFractionId = Guid.NewGuid(),
                Status = current,
                InstituteId = instituteId
            };
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(instituteId);
            
            // Act & Assert
            await Assert.ThrowsAsync<InvalidReportStatusChangeException>(() => _classUnderTest.UpdateReportStatusAsync(report, newStatus, false));
        }

        [Fact]
        public async Task UpdateReportStatus_PersistCall_SuccessIfSaveIsCalled()
        {
            // Arrange
            var instituteId = Guid.NewGuid();
            var report = new Report
            {
                Id = Guid.NewGuid(),
                LicenseFractionId = Guid.NewGuid(),
                Status = ReportStatus.Generated,
                InstituteId = instituteId
            };

            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(instituteId);

            // Act
            var result = await _classUnderTest.UpdateReportStatusAsync(report, ReportStatus.Approved, true);

            // Assert
            A.CallTo(() => _dbContextFake.SaveChangesAsync(new CancellationToken())).MustHaveHappened();
            A.CallTo(() =>
                _kafkaProducerFake.WriteMessage(KafkaTopic.ReportUpdated, A<string>.Ignored, _httpAuthContextFake,
                    A<string>.Ignored)).MustHaveHappenedOnceExactly();
            A.CallTo(() =>
                _kafkaProducerFake.WriteMessage(KafkaTopic.ReportUpdatedFrontend, A<string>.Ignored, _httpAuthContextFake,
                    A<string>.Ignored)).MustHaveHappenedOnceExactly();
            Assert.True(result.Status == ReportStatus.Approved);
        }
    }
}
