using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class ThoraxCTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public ThoraxCTReportSchemaRepository(ThoraxMRTDbContext dbContext): base(dbContext)
        {
        }
    }
}
