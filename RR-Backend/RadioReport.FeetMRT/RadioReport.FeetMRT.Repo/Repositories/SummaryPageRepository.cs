using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
