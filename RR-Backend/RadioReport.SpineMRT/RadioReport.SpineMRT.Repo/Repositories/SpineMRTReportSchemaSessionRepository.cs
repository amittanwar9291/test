using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SpineMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public SpineMRTReportSchemaSessionRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
