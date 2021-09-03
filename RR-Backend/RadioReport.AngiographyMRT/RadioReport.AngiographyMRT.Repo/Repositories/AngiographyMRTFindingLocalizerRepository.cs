using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class AngiographyMRTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public AngiographyMRTFindingLocalizerRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
