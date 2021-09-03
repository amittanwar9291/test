using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class AnatomyPageRepository : PageRepositoryBase<AnatomyPage>, IAnatomyPageRepository
    {
        public AnatomyPageRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
