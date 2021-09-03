using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class AbdomenMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public AbdomenMRTReportSchemaSessionRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
