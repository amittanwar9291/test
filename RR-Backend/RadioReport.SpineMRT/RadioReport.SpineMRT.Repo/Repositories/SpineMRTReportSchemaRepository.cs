using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SpineMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public SpineMRTReportSchemaRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
