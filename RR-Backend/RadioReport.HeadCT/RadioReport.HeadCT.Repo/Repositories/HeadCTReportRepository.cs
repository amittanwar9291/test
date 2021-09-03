using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class HeadCTReportRepository : ReportRepository
    {
        public HeadCTReportRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
