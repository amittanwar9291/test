using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(KneeMRTDbContext dbContext) : base(dbContext)
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
