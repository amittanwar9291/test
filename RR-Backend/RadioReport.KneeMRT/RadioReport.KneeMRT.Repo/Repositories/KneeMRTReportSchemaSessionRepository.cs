using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class KneeMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public KneeMRTReportSchemaSessionRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
