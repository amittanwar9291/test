using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class ElbowMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public ElbowMRTReportSchemaSessionRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
