using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class FacialSkullPageRepository : PageRepositoryBase<FacialSkullPage>, IFacialSkullPageRepository
    {
        public FacialSkullPageRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
