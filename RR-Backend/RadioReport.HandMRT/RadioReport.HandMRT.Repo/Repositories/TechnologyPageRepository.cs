using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<TechnologyPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<TechnologyPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(TechnologyPage.CMSideEffects), nameof(TechnologyPage.Sequences) });
        }

        protected override void UpdateCollections(TechnologyPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.CMSideEffects);
            UpdateCollection(model.Sequences);
        }
    }
}
