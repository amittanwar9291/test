using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class FeetMRTReportRepository : ReportRepository
    {
        public FeetMRTReportRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
