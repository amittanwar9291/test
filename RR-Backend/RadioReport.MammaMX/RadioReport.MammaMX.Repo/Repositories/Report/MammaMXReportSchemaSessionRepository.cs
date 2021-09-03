using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammaMXReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public MammaMXReportSchemaSessionRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }
    }
}
