using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class SoftPartsPageRepository : PageRepositoryBase<SoftPartsPage>, ISoftPartsPageRepository
    {
        public SoftPartsPageRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SoftPartsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SoftPartsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SoftPartsPage.Findings) });
        }

        protected override void UpdateCollections(SoftPartsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
