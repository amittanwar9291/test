using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.AbdomenCT.Domain.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class TechnologyPageRepository : PageRepositoryBase<TechnologyPage>, ITechnologyPageRepository
    {
        public TechnologyPageRepository(AbdomenCTDbContext dbContext) : base(dbContext)
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

            if (model?.Acquisitions?.Count() > 0)
            {
                model.Acquisitions.ToList().ForEach(acquisition => UpdateCollection(acquisition.Reconstructions));
            }
        }
    }
}