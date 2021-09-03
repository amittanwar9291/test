using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class ThoraxCTReportRepository : ReportRepository
    {
        public ThoraxCTReportRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
