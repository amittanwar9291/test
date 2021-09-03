using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class KneeMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public KneeMRTReportSchemaRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
