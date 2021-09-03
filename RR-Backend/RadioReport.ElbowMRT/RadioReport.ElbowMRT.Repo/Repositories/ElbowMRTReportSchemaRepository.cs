using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class ElbowMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public ElbowMRTReportSchemaRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
