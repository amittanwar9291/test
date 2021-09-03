using System;
using System.Threading.Tasks;
using FakeItEasy;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Models;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;
using RadioReport.Core.Tracking.Domain.Services;
using Xunit;

namespace RadioReport.Tests.Tracking
{
    public class TrackingServiceTests
    {
        private readonly TrackingService _classUnderTest;
        private readonly ICacheService _cacheServiceFake;
        private readonly HttpAuthContext _httpAuthContextFake;
        private readonly ITrackingManager _trackingManagerFake;

        public TrackingServiceTests()
        {
            _cacheServiceFake = A.Fake<ICacheService>();
            _httpAuthContextFake = A.Fake<HttpAuthContext>();
            _trackingManagerFake = A.Fake<ITrackingManager>();
            _classUnderTest = new TrackingService(_cacheServiceFake, A.Fake<ILogger<TrackingService>>(), _httpAuthContextFake, _trackingManagerFake);
        }

        [Fact]
        public async void StartStopTracking_StartEvent_SetCacheCalledProperly()
        {
            // Arrange
            var request = new StartStopTrackingRequest
            {
                ReportId = Guid.Parse("e5d24ad8-27ea-458b-8eb8-f4bf23ad020b"),
                TrackingEventType = TrackingEventType.Start,
                TrackingSubjectId = "subjectId",
                TrackingSubjectType = TrackingSubjectType.Page,
                ModuleName = "KneeMRT"
            };

            // Act
            await _classUnderTest.StartStopTracking(request);

            // Assert
            A.CallTo(() => _cacheServiceFake.Set("e5d24ad8-27ea-458b-8eb8-f4bf23ad020b__Page__subjectId", A<string>.That.Matches(s =>
                s.Contains("\"ReportId\":\"e5d24ad8-27ea-458b-8eb8-f4bf23ad020b\"") &&
                s.Contains("\"TrackingEventType\":0") &&
                s.Contains("\"TrackingSubjectId\":\"subjectId\"") &&
                s.Contains("\"TrackingSubjectType\":1") &&
                s.Contains("\"ModuleName\":\"KneeMRT\"")
            ), TimeSpan.FromHours(5))).MustHaveHappened();
        }

        [Fact]
        public async void StartStopTracking_StopEventUnauthorizedUserId_UnauthorizedThrown()
        {
            // Arrange
            var request = new StartStopTrackingRequest
            {
                TrackingEventType = TrackingEventType.Stop,
                TrackingSubjectId = "subjectId",
                TrackingSubjectType = TrackingSubjectType.Page
            };
            var cachedRequest = new StartStopTrackingRequest
            {
                Time = DateTime.Now.AddSeconds(-10)
            };
            A.CallTo(() => _cacheServiceFake.Get(A<string>.Ignored)).Returns(Task.FromResult(cachedRequest.AsJson()));
            A.CallTo(() => _trackingManagerFake.GetByIds(A<Guid>.Ignored, A<TrackingSubjectType>.Ignored, A<string>.Ignored)).Returns(new TrackingEntity
            {
                UserId = Guid.Parse("c72268b7-b79a-4011-94eb-6153256d58ed")
            });
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.Parse("969c5a7d-ccd1-4842-a38d-7efb4de15237"));

            try
            {
                // Act
                await _classUnderTest.StartStopTracking(request);
            }
            catch (Exception e)
            {
                // Assert
                Assert.IsType<UnauthorizedAccessException>(e);
            }
        }

        [Fact]
        public async void StartStopTracking_StopEventUnauthorizedInstituteId_UnauthorizedThrown()
        {
            // Arrange
            var request = new StartStopTrackingRequest
            {
                TrackingEventType = TrackingEventType.Stop,
                TrackingSubjectId = "subjectId",
                TrackingSubjectType = TrackingSubjectType.Page
            };
            var cachedRequest = new StartStopTrackingRequest
            {
                Time = DateTime.Now.AddSeconds(-10)
            };
            A.CallTo(() => _cacheServiceFake.Get(A<string>.Ignored)).Returns(Task.FromResult(cachedRequest.AsJson()));
            A.CallTo(() => _trackingManagerFake.GetByIds(A<Guid>.Ignored, A<TrackingSubjectType>.Ignored, A<string>.Ignored)).Returns(new TrackingEntity
            {
                UserId = Guid.Parse("c72268b7-b79a-4011-94eb-6153256d58ed"),
                InstituteId = Guid.Parse("969c5a7d-ccd1-4842-a38d-7efb4de15237")
            });
            A.CallTo(() => _httpAuthContextFake.UserId).Returns(Guid.Parse("c72268b7-b79a-4011-94eb-6153256d58ed"));
            A.CallTo(() => _httpAuthContextFake.InstituteId).Returns(Guid.Parse("563b976f-439b-4f69-9a6d-cdc4ce19044c"));

            try
            {
                // Act
                await _classUnderTest.StartStopTracking(request);
            }
            catch (Exception e)
            {
                // Assert
                Assert.IsType<UnauthorizedAccessException>(e);
            }
        }
    }
}
