using System;
using System.Linq.Expressions;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using System.Threading.Tasks;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(CardioMRTDbContext dbContext) : base(dbContext)
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
