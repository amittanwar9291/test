using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class AnatomyEnhancementPageRepository : PageRepositoryBase<AnatomyEnhancementPage>, IAnatomyEnhancementPageRepository
    {
        public AnatomyEnhancementPageRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AnatomyEnhancementPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnatomyEnhancementPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] 
            { 
                nameof(AnatomyEnhancementPage.SiliconeImplantFinding1), 
                nameof(AnatomyEnhancementPage.SiliconeImplantFinding2), 
                nameof(AnatomyEnhancementPage.MamillaFinding1),
                nameof(AnatomyEnhancementPage.MamillaFinding2)});
        }

        public override AnatomyEnhancementPage Update(AnatomyEnhancementPage model)
        {
            DataContext.Attach<AnatomyEnhancementPage>(model);

            var result = DataContext.Set<AnatomyEnhancementPage>().Update(model);

            SetUpdateForModelProperty(model, p => p.SiliconeImplantFinding1);
            SetUpdateForModelProperty(model, p => p.SiliconeImplantFinding2);
            SetUpdateForModelProperty(model, p => p.MamillaFinding1);
            SetUpdateForModelProperty(model, p => p.MamillaFinding2);

            return result.Entity;
        }

    }
}
