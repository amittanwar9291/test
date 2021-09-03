using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class RatingPageRepository : PageRepositoryBase<RatingPage>, IRatingPageRepository
    {
        public RatingPageRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
