using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class CartilageAndLabrumPageRepository : PageRepositoryBase<CartilageAndLabrumPage>, ICartilageAndLabrumPageRepository
    {
        public CartilageAndLabrumPageRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<CartilageAndLabrumPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CartilageAndLabrumPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CartilageAndLabrumPage.Findings) });
        }

        protected override void UpdateCollections(CartilageAndLabrumPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
