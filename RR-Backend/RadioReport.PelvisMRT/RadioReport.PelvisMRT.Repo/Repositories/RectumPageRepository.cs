using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class RectumPageRepository : PageRepositoryBase<RectumPage>, IRectumPageRepository
    {
        public RectumPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
        
        public override Task<RectumPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<RectumPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(RectumPage.Findings) });
        }

        protected override void UpdateCollections(RectumPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
