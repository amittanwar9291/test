using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class NeckMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public NeckMRTReportSchemaSessionRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
