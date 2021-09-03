using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class HeadCTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public HeadCTReportSchemaSessionRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
