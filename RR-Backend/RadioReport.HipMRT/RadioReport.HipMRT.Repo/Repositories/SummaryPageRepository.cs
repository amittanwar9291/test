using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
