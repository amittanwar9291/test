using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
