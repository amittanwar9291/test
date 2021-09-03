using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SpineMRTReportRepository : ReportRepository
    {
        public SpineMRTReportRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
