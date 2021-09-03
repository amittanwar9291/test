using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class PelvisMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public PelvisMRTReportSchemaSessionRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
