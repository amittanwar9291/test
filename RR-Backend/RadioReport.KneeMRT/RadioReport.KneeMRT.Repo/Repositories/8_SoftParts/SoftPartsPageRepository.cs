using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class SoftPartsPageRepository : PageRepositoryBase<SoftPartsPage>, ISoftPartsPageRepository
    {
        public SoftPartsPageRepository(KneeMRTDbContext dbContext) : base(dbContext)
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
