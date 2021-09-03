using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class KneeMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public KneeMRTFindingLocalizerRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
