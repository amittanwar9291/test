using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class DiscPageRepository : PageRepositoryBase<DiscPage>, IDiscPageRepository
    {
        public DiscPageRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<DiscPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<DiscPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(DiscPage.Findings) });
        }

        protected override void UpdateCollections(DiscPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
