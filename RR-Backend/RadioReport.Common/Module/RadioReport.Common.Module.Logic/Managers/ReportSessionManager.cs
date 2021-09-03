using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.Common.Module.Logic.Managers
{
    public class ReportSessionManager : Manager<ReportSession, IRepository<ReportSession>>, IReportSessionManager
    {
        public ReportSessionManager(IRepository<ReportSession> repository) : base(repository)
        {
        }

        public Task<ReportSession> GetByReportId(Guid reportId) => Repository.GetSingleOrDefaultAsync(s => s.ReportId == reportId);

        public async Task RemoveByReportId(Guid reportId)
        {
            var session = await GetByReportId(reportId);
            if (session != null)
            {
                Repository.Delete(session.Id);
                await Repository.SaveChangesAsync();
            }
        }
    }
}
