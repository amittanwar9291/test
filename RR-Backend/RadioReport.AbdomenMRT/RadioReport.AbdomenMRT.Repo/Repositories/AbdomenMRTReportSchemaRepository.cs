using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class AbdomenMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public AbdomenMRTReportSchemaRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
