using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Core.Tracking.Domain.Models;
using RadioReport.Core.Tracking.Domain.Models.Statistics;

namespace RadioReport.Core.Tracking.Domain.Interfaces
{
    public interface ITrackingRepository
    {
        TrackingEntity Add(TrackingEntity trackingEntity);
        TrackingEntity GetByIds(Guid reportId, TrackingSubjectType trackingSubjectType, string trackingSubjectId);
        Task<List<TrackingEntity>> GetAll();
        Task<List<TrackingEntity>> GetByExpression(Expression<Func<TrackingEntity, bool>> predicate);
        TrackingEntity Update(TrackingEntity trackingEntity);
        void RemoveByExpression(Expression<Func<TrackingEntity, bool>> predicate);
        List<ReportStatistic> GetByProcedureReportStatisticList();
        List<AverageTimeStatistic> GetByProcedureAverageTimeStatisticList();
        List<ReportPerRadiologistStatistic> GetByProcedureReportPerRadiologistStatisticList();
        Task SaveChangesAsync();
    }
}
