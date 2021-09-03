using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SpineMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public SpineMRTFindingLocalizerRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
