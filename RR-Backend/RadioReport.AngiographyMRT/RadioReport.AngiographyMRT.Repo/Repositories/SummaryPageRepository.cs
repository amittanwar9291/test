using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
