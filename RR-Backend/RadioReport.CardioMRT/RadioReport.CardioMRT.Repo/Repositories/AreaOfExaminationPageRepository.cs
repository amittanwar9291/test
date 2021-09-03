using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class AreaOfExaminationPageRepository : PageRepositoryBase<AreaOfExaminationPage>, IAreaOfExaminationPageRepository
    {
        public AreaOfExaminationPageRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AreaOfExaminationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AreaOfExaminationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AreaOfExaminationPage.PatientInformation) });
        }

        public override AreaOfExaminationPage Update(AreaOfExaminationPage model)
        {
            var result = DataContext.Set<AreaOfExaminationPage>().Update(model);

            return result.Entity;
        }
    }
}
