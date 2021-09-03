using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class SummaryPageRepository: PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }
    }
}
