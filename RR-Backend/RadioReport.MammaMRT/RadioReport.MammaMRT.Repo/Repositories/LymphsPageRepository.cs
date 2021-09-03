using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class LymphsPageRepository : PageRepositoryBase<LymphsPage>, ILymphsPageRepository
    {
        public LymphsPageRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
