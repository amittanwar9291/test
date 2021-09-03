using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class LocalizationPageRepository : PageRepositoryBase<LocalizationPage>, ILocalizationPageRepository
    {
        public LocalizationPageRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<LocalizationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LocalizationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(LocalizationPage.PatientInformation) });
        }

        public override LocalizationPage Update(LocalizationPage model)
        {
            var result = DataContext.Set<LocalizationPage>().Update(model);

            return result.Entity;
        }
    }
}
