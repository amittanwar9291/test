using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class FeetMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public FeetMRTReportSchemaRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
