using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class HandMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public HandMRTReportSchemaRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
