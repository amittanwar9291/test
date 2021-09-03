using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class SellarRegionPageRepository : PageRepositoryBase<SellarRegionPage>, ISellarRegionPageRepository
    {
        public SellarRegionPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
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
