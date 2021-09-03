using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammaMXReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public MammaMXReportSchemaRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }
    }
}
