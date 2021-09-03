using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class ExaminationPageRepository : PageRepositoryBase<ExaminationPage>, IExaminationPageRepository
    {
        public ExaminationPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<ExaminationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<ExaminationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(ExaminationPage.Findings), nameof(ExaminationPage.PatientInformation) });
        }

        public override ExaminationPage Update(ExaminationPage model)
        {
            if (model == null)
            {
                return null;
            }

            DataContext.Attach(model);

            var result = DataContext.Set<ExaminationPage>().Update(model);
            SetUpdateForModelProperty(model, m => m.PatientInformation);
            UpdateCollection(model.Findings);

            return result.Entity;
        }
    }
}
