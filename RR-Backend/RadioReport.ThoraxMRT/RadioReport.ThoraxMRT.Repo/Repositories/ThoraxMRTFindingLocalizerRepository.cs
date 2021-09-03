using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;
namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class ThoraxCTFindingLocalizerRepository: FindingLocalizerRepositoryBase
    {
        public ThoraxCTFindingLocalizerRepository(ThoraxMRTDbContext dbContext) : base (dbContext)
        {
        }
    }
}
