using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class AbdomenCTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public AbdomenCTFindingLocalizerRepository(AbdomenCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
