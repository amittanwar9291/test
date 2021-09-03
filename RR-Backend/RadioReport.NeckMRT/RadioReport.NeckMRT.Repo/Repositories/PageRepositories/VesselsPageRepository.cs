using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class VesselsPageRepository : PageRepositoryBase<VesselsPage>, IVesselsPageRepository
    {
        public VesselsPageRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<VesselsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<VesselsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(VesselsPage.Findings) });
        }
        protected override void UpdateCollections(VesselsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
