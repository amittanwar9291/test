using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SoftTissuesPageRepository : PageRepositoryBase<SoftTissuesPage>, ISoftTissuesPageRepository
    {
        public SoftTissuesPageRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<SoftTissuesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SoftTissuesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SoftTissuesPage.Findings) });
        }
        protected override void UpdateCollections(SoftTissuesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
