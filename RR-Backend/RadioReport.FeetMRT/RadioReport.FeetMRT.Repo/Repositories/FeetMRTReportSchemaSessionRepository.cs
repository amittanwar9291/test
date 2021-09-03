using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class FeetMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public FeetMRTReportSchemaSessionRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
