using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class ThoraxCTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public ThoraxCTReportSchemaSessionRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
