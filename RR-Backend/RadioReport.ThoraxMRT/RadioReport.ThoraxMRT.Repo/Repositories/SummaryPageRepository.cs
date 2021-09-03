using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
