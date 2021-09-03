using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<TechnologyPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<TechnologyPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id,
                new[]
                {
                    nameof(TechnologyPage.CMSideEffects),
                    nameof(TechnologyPage.Acquisitions),
                    nameof(TechnologyPage.Acquisitions) + "." + nameof(Acquisition.Reconstructions)
                });
        }

        protected override void UpdateCollections(TechnologyPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.CMSideEffects);
            UpdateCollection(model.Acquisitions);
            if (model?.Acquisitions?.Any() ?? false)
            {
                model.Acquisitions.ToList().ForEach(acquisition => UpdateCollection(acquisition.Reconstructions));
            }
        }
    }
}
