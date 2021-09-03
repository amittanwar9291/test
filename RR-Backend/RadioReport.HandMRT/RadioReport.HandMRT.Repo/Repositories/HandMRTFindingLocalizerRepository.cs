using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class HandMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public HandMRTFindingLocalizerRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
