using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
namespace RadioReport.CardioMRT.Repo.Repositories

{
    public class CardioMRTFindingLocalizerRepository: FindingLocalizerRepositoryBase
    {
        public CardioMRTFindingLocalizerRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
