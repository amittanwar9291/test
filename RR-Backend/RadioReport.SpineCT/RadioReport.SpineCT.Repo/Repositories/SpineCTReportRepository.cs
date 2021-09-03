using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class SpineCTReportRepository : ReportRepository
    {
        public SpineCTReportRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
