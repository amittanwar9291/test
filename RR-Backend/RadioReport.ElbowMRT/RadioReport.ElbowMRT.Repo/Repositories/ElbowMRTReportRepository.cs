using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class ElbowMRTReportRepository : ReportRepository
    {
        public ElbowMRTReportRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
