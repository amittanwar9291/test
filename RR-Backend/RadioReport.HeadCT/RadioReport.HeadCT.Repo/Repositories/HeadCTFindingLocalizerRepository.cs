using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class HeadCTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public HeadCTFindingLocalizerRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
