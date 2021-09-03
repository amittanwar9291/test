using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class SoftTissuePageRepository : PageRepositoryBase<SoftTissuePage>, ISoftTissuePageRepository
    {
        public SoftTissuePageRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<SoftTissuePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SoftTissuePage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SoftTissuePage.Findings) });
        }
        protected override void UpdateCollections(SoftTissuePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
