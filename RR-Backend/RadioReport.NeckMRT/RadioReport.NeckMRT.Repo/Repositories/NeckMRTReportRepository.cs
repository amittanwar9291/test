using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class NeckMRTReportRepository : ReportRepository
    {
        public NeckMRTReportRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
