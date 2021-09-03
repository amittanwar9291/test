using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class ElbowMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public ElbowMRTFindingLocalizerRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
