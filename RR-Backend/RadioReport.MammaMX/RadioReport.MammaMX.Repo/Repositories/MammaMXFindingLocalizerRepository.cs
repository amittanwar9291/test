using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammaMXFindingLocalizerRepository: FindingLocalizerRepositoryBase
    {
        public MammaMXFindingLocalizerRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }
    }
}
