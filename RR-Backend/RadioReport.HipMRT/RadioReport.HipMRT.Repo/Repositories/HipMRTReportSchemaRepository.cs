using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class HipMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public HipMRTReportSchemaRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
