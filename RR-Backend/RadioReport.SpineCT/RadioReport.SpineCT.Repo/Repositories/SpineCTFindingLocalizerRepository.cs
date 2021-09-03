using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class SpineCTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public SpineCTFindingLocalizerRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
