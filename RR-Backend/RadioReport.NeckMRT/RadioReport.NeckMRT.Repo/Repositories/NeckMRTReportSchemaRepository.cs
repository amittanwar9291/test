using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class NeckMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public NeckMRTReportSchemaRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
