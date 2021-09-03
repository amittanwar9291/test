using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class ShoulderMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public ShoulderMRTFindingLocalizerRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
