using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class ExaminationRegionPageRepository : PageRepositoryBase<ExaminationRegionPage>, IExaminationRegionPageRepository
    {
        public ExaminationRegionPageRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<ExaminationRegionPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<ExaminationRegionPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(ExaminationRegionPage.PatientInformation) });
        }

        public override ExaminationRegionPage Update(ExaminationRegionPage model)
        {
            var result = DataContext.Set<ExaminationRegionPage>().Update(model);

            return result.Entity;
        }
    }
}
