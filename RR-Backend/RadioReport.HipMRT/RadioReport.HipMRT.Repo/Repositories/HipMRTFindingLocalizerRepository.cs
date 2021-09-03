using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class HipMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public HipMRTFindingLocalizerRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
