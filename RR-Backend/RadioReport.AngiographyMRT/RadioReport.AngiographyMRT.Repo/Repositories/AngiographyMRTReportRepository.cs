using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class AngiographyMRTReportRepository : ReportRepository
    {
        public AngiographyMRTReportRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
