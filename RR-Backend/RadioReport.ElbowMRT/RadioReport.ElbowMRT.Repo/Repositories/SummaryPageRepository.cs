using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
