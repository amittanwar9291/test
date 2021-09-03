using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class EvaluationPageRepository : PageRepositoryBase<EvaluationPage>, IEvaluationPageRepository
    {
        public EvaluationPageRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }       
    }
}
