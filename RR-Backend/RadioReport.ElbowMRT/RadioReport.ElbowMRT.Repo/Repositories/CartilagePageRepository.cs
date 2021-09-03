using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class CartilagePageRepository : PageRepositoryBase<CartilagePage>, ICartilagePageRepository
    {
        public CartilagePageRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<CartilagePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CartilagePage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CartilagePage.Findings) });
        }

        protected override void UpdateCollections(CartilagePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
