using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class HipMRTReportRepository : ReportRepository
    {
        public HipMRTReportRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
