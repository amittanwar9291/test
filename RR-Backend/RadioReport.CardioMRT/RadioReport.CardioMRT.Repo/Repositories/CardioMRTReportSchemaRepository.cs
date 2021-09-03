using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class CardioMRTReportSchemaRepository : ReportSchemaRepositoryBase
    {
        public CardioMRTReportSchemaRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
