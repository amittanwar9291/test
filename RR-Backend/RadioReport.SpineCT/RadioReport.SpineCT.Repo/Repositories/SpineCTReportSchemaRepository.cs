using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class SpineCTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public SpineCTReportSchemaRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
