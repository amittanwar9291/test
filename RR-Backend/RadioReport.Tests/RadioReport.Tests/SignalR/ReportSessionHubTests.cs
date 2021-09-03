using System;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Connections.Features;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.SignalR;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Core.SignalR.API.Hubs;
using RadioReport.Core.SignalR.Domain.Consts;
using RadioReport.Core.SignalR.Domain.Interfaces;
using RadioReport.Core.SignalR.Domain.Models;
using Xunit;

namespace RadioReport.Tests.SignalR
{
    public class ReportSessionHubTests
    {
        private readonly ReportSessionHub   _classUnderTest;
        private readonly IConnectionManager _connectionManagerFake;
        private readonly ICacheService      _cacheServiceFake;
        private readonly HubCallerContext   _hubCallerContextFake;
        private readonly IQueryCollection   _queryCollectionFake;

        public ReportSessionHubTests()
        {
            _connectionManagerFake = A.Fake<IConnectionManager>();
            _cacheServiceFake      = A.Fake<ICacheService>();
            _queryCollectionFake   = A.Fake<IQueryCollection>();
            _hubCallerContextFake  = A.Fake<HubCallerContext>();

            var featureCollectionFake  = A.Fake<IFeatureCollection>();
            var httpContextFeatureFake = A.Fake<IHttpContextFeature>();
            var kafkaProducerFake      = A.Fake<IKafkaProducer>();
            var httpContextFake        = A.Fake<HttpContext>();
            var httpRequestFake        = A.Fake<HttpRequest>();
            var taskQueueFake          = A.Fake<TaskQueue>();

            A.CallTo(() => _hubCallerContextFake.Features).Returns(featureCollectionFake);
            A.CallTo(() => featureCollectionFake.Get<IHttpContextFeature>()).Returns(httpContextFeatureFake);
            A.CallTo(() => httpContextFeatureFake.HttpContext).Returns(httpContextFake);
            A.CallTo(() => httpContextFake.Request).Returns(httpRequestFake);
            A.CallTo(() => httpRequestFake.Query).Returns(_queryCollectionFake);
            _classUnderTest = new ReportSessionHub(_connectionManagerFake, kafkaProducerFake, taskQueueFake)
            {
                Context = _hubCallerContextFake
            };
        }

        [Theory]
        [InlineData("invalid", "KneeMRT")]
        [InlineData("e4bc5863-9c18-42e9-98e0-dd6fdb34430a", "invalid")]
        public async Task OnConnectedAsync_InvalidReportData_ThrowsException(string reportId, string module)
        {
            // Arrange
            A.CallTo(() => _queryCollectionFake[QueryParams.ReportId]).Returns(reportId);
            A.CallTo(() => _queryCollectionFake[QueryParams.Module]).Returns(module);

            // Act + Assert
            await Assert.ThrowsAsync<InvalidReportDataException>(() => _classUnderTest.OnConnectedAsync());
        }

        [Fact]
        public async Task OnConnectedAsync_ValidReportData_CachingCalled()
        {
            // Arrange
            const string expectedReportId     = "e4bc5863-9c18-42e9-98e0-dd6fdb34430a";
            const string expetedModule        = "KneeMRT";
            const string expectedConnectionId = "theconnectionid";
            A.CallTo(() => _queryCollectionFake[QueryParams.ReportId]).Returns(expectedReportId);
            A.CallTo(() => _queryCollectionFake[QueryParams.Module]).Returns(expetedModule);
            A.CallTo(() => _hubCallerContextFake.ConnectionId).Returns(expectedConnectionId);

            // Act
            await _classUnderTest.OnConnectedAsync();

            // Assert
            A.CallTo(
                 () => _connectionManagerFake.CacheConnection(
                     A<string>.That.Matches(s => s == HubNames.ReportSession),
                     A<string>.That.Matches(s => s == $"{expectedReportId}_{expetedModule}"),
                     A<string>.That.Matches(s => s == expectedConnectionId)
                 )
             )
             .MustHaveHappened();
        }

        [Fact]
        public async Task OnDisconnectedAsync_ValidReportData_DisconnectDelegated()
        {
            // Arrange
            const string expectedReportId     = "e4bc5863-9c18-42e9-98e0-dd6fdb34430a";
            const string expetedModule        = "KneeMRT";
            const string expectedConnectionId = "theconnectionid";
            A.CallTo(() => _hubCallerContextFake.ConnectionId).Returns(expectedConnectionId);
            A.CallTo(() => _connectionManagerFake.GetIdentifier(A<string>.Ignored, A<string>.Ignored)).Returns($"{expectedReportId}_{expetedModule}");

            // Act
            await _classUnderTest.OnDisconnectedAsync(new Exception());

            // Assert
            A.CallTo(
                 () => _connectionManagerFake.RemoveCachedConnection(
                     A<string>.That.Matches(s => s == HubNames.ReportSession),
                     A<string>.That.Matches(s => s == expectedConnectionId)
                 )
             )
             .MustHaveHappened();
        }

        [Fact]
        public async Task OnDisconnectedAsync_InvalidIdentifier_ThrowsException()
        {
            // Arrange
            A.CallTo(() => _connectionManagerFake.GetIdentifier(A<string>.Ignored, A<string>.Ignored)).Returns("invalid");

            // Act * Assert
            await Assert.ThrowsAsync<InvalidReportDataException>(() => _classUnderTest.OnDisconnectedAsync(new Exception()));
        }
    }
}
