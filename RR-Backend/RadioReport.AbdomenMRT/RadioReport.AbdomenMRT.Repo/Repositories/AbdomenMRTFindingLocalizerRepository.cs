using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class AbdomenMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public AbdomenMRTFindingLocalizerRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
