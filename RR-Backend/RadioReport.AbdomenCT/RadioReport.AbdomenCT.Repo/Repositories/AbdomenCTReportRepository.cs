using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class AbdomenCTReportRepository : ReportRepository
    {
        public AbdomenCTReportRepository(AbdomenCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
