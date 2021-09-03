using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class KneeMRTReportRepository : ReportRepository
    {
        public KneeMRTReportRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
