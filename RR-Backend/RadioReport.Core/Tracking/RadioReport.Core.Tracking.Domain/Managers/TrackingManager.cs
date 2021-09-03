using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Managers
{
    public class TrackingManager : ITrackingManager
    {
        private readonly ITrackingRepository _trackingRepository;

        public TrackingManager(ITrackingRepository trackingRepository)
        {
            _trackingRepository = trackingRepository;
        }

        public async Task<TrackingEntity> Add(TrackingEntity trackingEntity)
        {
            var trackingEntityReport = (await _trackingRepository.GetByExpression(t => t.ReportId == trackingEntity.ReportId && t.TrackingSubjectType == TrackingSubjectType.Report)).FirstOrDefault();

            if(trackingEntityReport != null)
            {
                trackingEntity.ReportStatus = trackingEntityReport.ReportStatus;
            }

            trackingEntity = _trackingRepository.Add(trackingEntity);
            await _trackingRepository.SaveChangesAsync();

            return trackingEntity;
        }

        public TrackingEntity GetByIds(Guid reportId, TrackingSubjectType trackingSubjectType, string trackingSubjectId) =>
            _trackingRepository.GetByIds(reportId, trackingSubjectType, trackingSubjectId);

        public Task<List<TrackingEntity>> GetAll() => _trackingRepository.GetAll();

        public Task<List<TrackingEntity>> GetByReportId(Guid reportId) => _trackingRepository.GetByExpression(t => t.ReportId == reportId);

        public Task<List<TrackingEntity>> GetByUserId(Guid userId) => _trackingRepository.GetByExpression(t => t.UserId == userId);

        public async Task<TrackingEntity> Update(TrackingEntity trackingEntity)
        {
            trackingEntity = _trackingRepository.Update(trackingEntity);
            await _trackingRepository.SaveChangesAsync();

            return trackingEntity;
        }

        public async Task RemoveByUserId(Guid userId)
        {
            _trackingRepository.RemoveByExpression(t => t.UserId == userId);
            await _trackingRepository.SaveChangesAsync();
        }

        public async Task RemoveByReportIds(IEnumerable<string> reportIds)
        {
            _trackingRepository.RemoveByExpression(t => reportIds.Contains(t.ReportId.ToString()));
            await _trackingRepository.SaveChangesAsync();
        }
    }
}
