using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AngiographyCTReportRepository : ReportRepository
    {
        public AngiographyCTReportRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
