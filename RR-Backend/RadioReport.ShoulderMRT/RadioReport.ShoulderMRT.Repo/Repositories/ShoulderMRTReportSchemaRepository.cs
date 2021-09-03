using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class ShoulderMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public ShoulderMRTReportSchemaRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
