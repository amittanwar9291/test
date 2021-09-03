using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class SellarRegionPageRepository : PageRepositoryBase<SellarRegionPage>, ISellarRegionPageRepository
    {
        public SellarRegionPageRepository(HeadCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SellarRegionPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SellarRegionPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SellarRegionPage.Findings) });
        }

        protected override void UpdateCollections(SellarRegionPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
