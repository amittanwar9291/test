using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class ThoraxCTReportRepository : ReportRepository
    {
        public ThoraxCTReportRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
