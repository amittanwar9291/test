using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class MammaMRTFindingLocalizerRepository: FindingLocalizerRepositoryBase
    {
        public MammaMRTFindingLocalizerRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
