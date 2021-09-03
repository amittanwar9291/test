using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammaMXReportRepository : ReportRepository
    {
        public MammaMXReportRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }
    }
}
