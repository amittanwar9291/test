using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class ShoulderMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public ShoulderMRTReportSchemaSessionRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
