using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class NeckMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public NeckMRTFindingLocalizerRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
