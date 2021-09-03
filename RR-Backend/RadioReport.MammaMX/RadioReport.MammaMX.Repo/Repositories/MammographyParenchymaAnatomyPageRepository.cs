using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammographyParenchymaAnatomyPageRepository : PageRepositoryBase<MammographyParenchymaAnatomyPage>, IMammographyParenchymaAnatomyPageRepository
    {
        public MammographyParenchymaAnatomyPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }
    }
}