using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class ThoraxCTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public ThoraxCTReportSchemaRepository(ThoraxCTDbContext dbContext): base(dbContext)
        {
        }
    }
}
