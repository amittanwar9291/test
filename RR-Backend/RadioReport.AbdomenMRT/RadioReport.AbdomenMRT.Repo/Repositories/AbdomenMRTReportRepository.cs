using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class AbdomenMRTReportRepository : ReportRepository
    {
        public AbdomenMRTReportRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
