using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class PelvisMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public PelvisMRTFindingLocalizerRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
