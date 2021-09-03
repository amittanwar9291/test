using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class ThoraxCTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public ThoraxCTReportSchemaSessionRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
