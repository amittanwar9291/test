using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class ExaminationPageRepository : PageRepositoryBase<ExaminationPage>, IExaminationPageRepository
    {
        public ExaminationPageRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<ExaminationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<ExaminationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(ExaminationPage.PatientInformation) });
        }
        public override ExaminationPage Update(ExaminationPage model)
        {
            var result = DataContext.Set<ExaminationPage>().Update(model);

            return result.Entity;
        }    
    }
}
