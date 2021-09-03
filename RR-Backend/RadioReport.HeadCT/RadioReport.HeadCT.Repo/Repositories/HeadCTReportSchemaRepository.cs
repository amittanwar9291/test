using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class HeadCTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public HeadCTReportSchemaRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
