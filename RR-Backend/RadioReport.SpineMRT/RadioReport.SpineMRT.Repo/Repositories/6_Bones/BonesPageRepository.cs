using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class BonesPageRepository : PageRepositoryBase<BonesPage>, IBonesPageRepository
    {
        public BonesPageRepository(SpineMRTDbContext dbContext) : base(dbContext)
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
