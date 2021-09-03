using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AngiographyCTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public AngiographyCTReportSchemaRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
