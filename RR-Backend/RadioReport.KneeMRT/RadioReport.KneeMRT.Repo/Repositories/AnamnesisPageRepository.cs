using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
