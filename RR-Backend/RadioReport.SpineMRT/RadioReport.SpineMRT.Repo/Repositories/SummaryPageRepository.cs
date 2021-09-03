using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
