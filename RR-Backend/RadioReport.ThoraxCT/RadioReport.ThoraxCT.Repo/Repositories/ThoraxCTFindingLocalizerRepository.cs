using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class ThoraxCTFindingLocalizerRepository: FindingLocalizerRepositoryBase
    {
        public ThoraxCTFindingLocalizerRepository(ThoraxCTDbContext dbContext) : base (dbContext)
        {
        }
    }
}
