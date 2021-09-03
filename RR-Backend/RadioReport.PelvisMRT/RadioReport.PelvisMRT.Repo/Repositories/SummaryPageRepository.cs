using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
