using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class FeetMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public FeetMRTFindingLocalizerRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
