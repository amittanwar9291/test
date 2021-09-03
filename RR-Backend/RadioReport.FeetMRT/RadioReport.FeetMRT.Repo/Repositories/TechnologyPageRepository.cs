using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models.Technology;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(FeetMRTDbContext dbContext) : base(dbContext)
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
