using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
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
