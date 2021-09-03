using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class BonesPageRepository : PageRepositoryBase<BonesPage>, IBonesPageRepository
    {
        public BonesPageRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<BonesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<BonesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(BonesPage.Findings) });
        }
        protected override void UpdateCollections(BonesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
