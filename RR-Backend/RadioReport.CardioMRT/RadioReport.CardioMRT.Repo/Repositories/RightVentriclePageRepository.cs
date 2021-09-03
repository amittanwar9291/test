using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class RightVentriclePageRepository : PageRepositoryBase<RightVentriclePage>, IRightVentriclePageRepository
    {
        public RightVentriclePageRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
