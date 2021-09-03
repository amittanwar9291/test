using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class CerebrospinalFluidSpacePageRepository : PageRepositoryBase<CerebrospinalFluidSpacePage>, ICerebrospinalFluidSpacePageRepository
    {
        public CerebrospinalFluidSpacePageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<CerebrospinalFluidSpacePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CerebrospinalFluidSpacePage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CerebrospinalFluidSpacePage.Findings) });
        }

        protected override void UpdateCollections(CerebrospinalFluidSpacePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
