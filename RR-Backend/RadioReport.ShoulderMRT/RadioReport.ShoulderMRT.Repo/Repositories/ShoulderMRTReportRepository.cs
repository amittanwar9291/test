using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class ShoulderMRTReportRepository : ReportRepository
    {
        public ShoulderMRTReportRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
