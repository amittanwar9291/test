using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AngiographyCTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public AngiographyCTReportSchemaSessionRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
