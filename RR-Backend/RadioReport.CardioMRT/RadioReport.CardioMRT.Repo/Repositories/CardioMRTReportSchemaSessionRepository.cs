using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class CardioMRTReportSchemaSessionRepository : ReportSchemaSessionRepositoryBase
    {
        public CardioMRTReportSchemaSessionRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
