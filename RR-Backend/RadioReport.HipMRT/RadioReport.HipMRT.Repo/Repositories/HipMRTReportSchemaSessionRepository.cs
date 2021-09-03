using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class HipMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public HipMRTReportSchemaSessionRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
