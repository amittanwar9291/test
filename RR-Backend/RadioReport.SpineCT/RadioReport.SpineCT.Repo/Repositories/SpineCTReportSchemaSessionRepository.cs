using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class SpineCTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public SpineCTReportSchemaSessionRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
