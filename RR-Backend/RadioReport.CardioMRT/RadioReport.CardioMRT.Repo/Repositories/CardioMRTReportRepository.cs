using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class CardioMRTReportRepository : ReportRepository
    {
        public CardioMRTReportRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
