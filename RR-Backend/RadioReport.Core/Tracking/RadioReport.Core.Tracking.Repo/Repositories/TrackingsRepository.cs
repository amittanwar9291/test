using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Models;
using RadioReport.Core.Tracking.Domain.Interfaces;
using RadioReport.Core.Tracking.Domain.Models;
using RadioReport.Core.Tracking.Domain.Models.Statistics;

namespace RadioReport.Core.Tracking.Repo.Repositories
{
    public class TrackingsRepository : ITrackingRepository
    {
        private readonly TrackingDbContext _dbContext;
        private readonly HttpAuthContext _httpAuthContext;

        public TrackingsRepository(TrackingDbContext dbContext, HttpAuthContext httpAuthContext)
        {
            _dbContext = dbContext;
            _httpAuthContext = httpAuthContext;
        }

        public TrackingEntity Add(TrackingEntity trackingEntity) => _dbContext.Trackings.Add(trackingEntity).Entity;

        public TrackingEntity GetByIds(Guid reportId, TrackingSubjectType trackingSubjectType, string trackingSubjectId)
            => _dbContext.Trackings.SingleOrDefault(t =>
                t.ReportId == reportId &&
                t.TrackingSubjectType == trackingSubjectType &&
                t.TrackingSubjectId == trackingSubjectId &&
                t.InstituteId == _httpAuthContext.InstituteId);

        public Task<List<TrackingEntity>> GetAll() => _dbContext.Set<TrackingEntity>()
            .Where(t => t.InstituteId == _httpAuthContext.InstituteId)
            .ToListAsync();

        public Task<List<TrackingEntity>> GetByExpression(Expression<Func<TrackingEntity, bool>> predicate) => _dbContext.Set<TrackingEntity>().Where(predicate)
            .Where(t => t.InstituteId == _httpAuthContext.InstituteId)
            .ToListAsync();

        public TrackingEntity Update(TrackingEntity trackingEntity) => _dbContext.Trackings.Update(trackingEntity).Entity;

        public void RemoveByExpression(Expression<Func<TrackingEntity, bool>> predicate)
        {
            var trackings = _dbContext.Trackings.Where(predicate).Where(t => t.InstituteId == _httpAuthContext.InstituteId).Where(predicate);
            _dbContext.Trackings.RemoveRange(trackings);
        }

        public List<ReportStatistic> GetByProcedureReportStatisticList() => _dbContext.ReportStatistics.FromSqlRaw($"[dbo].[GetReportStatistics] '{_httpAuthContext.InstituteId}'").ToList();

        public List<AverageTimeStatistic> GetByProcedureAverageTimeStatisticList() => _dbContext.AverageTimeStatistics.FromSqlRaw($"[dbo].[GetAverageTimeStatistics] '{_httpAuthContext.InstituteId}'").ToList();

        public List<ReportPerRadiologistStatistic> GetByProcedureReportPerRadiologistStatisticList() => _dbContext.ReportPerRadiologistStatistics.FromSqlRaw($"[dbo].[GetReportPerRadiologistStatistics] '{_httpAuthContext.InstituteId}'").ToList();

        public async Task SaveChangesAsync() => await _dbContext.SaveChangesAsync();


    }
}
