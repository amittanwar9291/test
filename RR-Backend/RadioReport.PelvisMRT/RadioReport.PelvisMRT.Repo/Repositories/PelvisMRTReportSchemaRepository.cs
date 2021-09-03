using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class PelvisMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public PelvisMRTReportSchemaRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
