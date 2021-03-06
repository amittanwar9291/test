using System;
using System.Linq.Expressions;
using RadioReport.Common.Module.Repository.Repositories;
using System.Threading.Tasks;
using RadioReport.PelvisMRT.Domain.Models;
using RadioReport.PelvisMRT.Domain.Interfaces;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
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
