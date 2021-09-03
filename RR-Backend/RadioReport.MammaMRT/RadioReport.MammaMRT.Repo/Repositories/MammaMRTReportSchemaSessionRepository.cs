using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class MammaMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public MammaMRTReportSchemaSessionRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
