using RadioReport.Common.Module.Repository.Repositories.ReportGenerator;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AngiographyCTFindingLocalizerRepository : FindingLocalizerRepositoryBase
    {
        public AngiographyCTFindingLocalizerRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
