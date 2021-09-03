using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class MammaMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public MammaMRTReportSchemaRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
