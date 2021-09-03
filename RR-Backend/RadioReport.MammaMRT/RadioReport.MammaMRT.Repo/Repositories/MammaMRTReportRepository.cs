using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class MammaMRTReportRepository : ReportRepository
    {
        public MammaMRTReportRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
