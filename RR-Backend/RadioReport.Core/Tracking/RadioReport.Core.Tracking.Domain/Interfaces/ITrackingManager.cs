using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Models;

namespace RadioReport.Core.Tracking.Domain.Interfaces
{
    public interface ITrackingManager
    {
        Task<TrackingEntity> Add(TrackingEntity trackingEntity);
        TrackingEntity GetByIds(Guid reportId, TrackingSubjectType trackingSubjectType, string trackingSubjectId);
        Task<List<TrackingEntity>> GetAll();
        Task<List<TrackingEntity>> GetByReportId(Guid reportId);
        Task<List<TrackingEntity>> GetByUserId(Guid userId);
        Task<TrackingEntity> Update(TrackingEntity trackingEntity);
        Task RemoveByUserId(Guid userId);
        Task RemoveByReportIds(IEnumerable<string> reportIds);
    }
}
