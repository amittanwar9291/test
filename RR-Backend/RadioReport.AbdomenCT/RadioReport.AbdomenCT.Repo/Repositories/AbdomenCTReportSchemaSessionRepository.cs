using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class AbdomenCTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public AbdomenCTReportSchemaSessionRepository(AbdomenCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
