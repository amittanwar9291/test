using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class CortexPageRepository : PageRepositoryBase<CortexPage>, ICortexPageRepository
    {
        public CortexPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<CortexPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CortexPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CortexPage.Findings) });
        }

        protected override void UpdateCollections(CortexPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
