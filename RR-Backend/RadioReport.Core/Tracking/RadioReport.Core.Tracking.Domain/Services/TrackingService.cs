using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Models;
using RadioReport.Core.Tracking.Domain.Consts;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Services
{
    public class TrackingService : ITrackingService
    {
        private readonly ICacheService _cacheService;
        private readonly ILogger<TrackingService> _logger;
        private readonly HttpAuthContext _httpAuthContext;
        private readonly ITrackingManager _trackingManager;

        public TrackingService(ICacheService cacheService, ILogger<TrackingService> logger, HttpAuthContext httpAuthContext, ITrackingManager trackingManager)
        {
            _cacheService = cacheService;
            _logger = logger;
            _httpAuthContext = httpAuthContext;
            _trackingManager = trackingManager;
        }

        public async Task StartStopTracking(StartStopTrackingRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            switch (request.TrackingEventType)
            {
                case TrackingEventType.Start:
                    HandleTrackingStartEvent(request);
                    break;
                case TrackingEventType.Stop:
                    await HandleTrackingStopEvent(request);
                    break;
                default:
                    throw new ArgumentException("unknown event type");
            }
        }

        public async Task RemoveTracking(RemoveTrackingRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            if (request.UserId.HasValue)
            {
                await _trackingManager.RemoveByUserId(request.UserId.Value);
            }
            
            if (request.ReportIds != null && request.ReportIds.Any())
            {
                await _trackingManager.RemoveByReportIds(request.ReportIds);
            }
        }

        private void HandleTrackingStartEvent(StartStopTrackingRequest request)
        {
            var cacheKey = TrackingCacheKey.Create(request).Key;
            request.Time = DateTime.Now;
            _cacheService.Set(cacheKey, request.AsJson(), TimeSpan.FromHours(Redis.Expirations.TrackingEventHours));
        }

        private async Task HandleTrackingStopEvent(StartStopTrackingRequest request)
        {
            var stopTime = DateTime.Now;
            var cacheKey = TrackingCacheKey.Create(request).Key;
            var cachedValue = await _cacheService.Get(cacheKey);
            if (cachedValue.IsNullOrEmpty())
            {
                _logger.LogWarning("No cached tracking start event found for stop event", request);

                return;
            }

            var startEvent = cachedValue.Deserialize<StartStopTrackingRequest>();
            await _cacheService.Remove(cacheKey);
            var visitDuration = stopTime - startEvent.Time;
            if (visitDuration.TotalSeconds < Constants.SkipTrackingThresholdSeconds)
            {
                return;
            }

            var (reportId, moduleName, trackingSubjectId, trackingSubjectType) =
                (request.ReportId, request.ModuleName, request.TrackingSubjectId, request.TrackingSubjectType);
            var existingTracking = _trackingManager.GetByIds(reportId, trackingSubjectType, trackingSubjectId);
            if (existingTracking != null)
            {
                if (existingTracking.InstituteId != _httpAuthContext.InstituteId || existingTracking.UserId != _httpAuthContext.UserId)
                {
                    throw new UnauthorizedAccessException();
                }

                existingTracking.VisitCount++;
                existingTracking.VisitDuration += Convert.ToInt32(visitDuration.TotalSeconds);
                existingTracking.LastModified = DateTime.Now;
                await _trackingManager.Update(existingTracking);
            }
            else
            {
                var newTracking = new TrackingEntity
                {
                    ReportId = reportId,
                    InstituteId = _httpAuthContext.InstituteId,
                    UserId = _httpAuthContext.UserId,
                    TrackingSubjectId = trackingSubjectId,
                    TrackingSubjectType = trackingSubjectType,
                    ModuleName = moduleName,
                    VisitCount = 1,
                    VisitDuration = Convert.ToInt32(visitDuration.TotalSeconds),
                    CreationDate = DateTime.Now,
                    LastModified = DateTime.Now
                };
                await _trackingManager.Add(newTracking);
            }
        }
    }
}
