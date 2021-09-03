using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class PelvisMRTReportRepository : ReportRepository
    {
        public PelvisMRTReportRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
