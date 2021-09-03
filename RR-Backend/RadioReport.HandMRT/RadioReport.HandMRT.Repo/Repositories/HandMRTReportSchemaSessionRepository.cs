using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class HandMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public HandMRTReportSchemaSessionRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
