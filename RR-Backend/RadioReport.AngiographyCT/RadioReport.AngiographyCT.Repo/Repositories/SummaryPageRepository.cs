using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
