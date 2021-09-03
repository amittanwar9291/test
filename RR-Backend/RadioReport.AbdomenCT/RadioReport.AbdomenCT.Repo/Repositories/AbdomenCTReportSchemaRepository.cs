using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class AbdomenCTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public AbdomenCTReportSchemaRepository(AbdomenCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
