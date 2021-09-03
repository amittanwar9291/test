using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class HandMRTReportRepository : ReportRepository
    {
        public HandMRTReportRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
