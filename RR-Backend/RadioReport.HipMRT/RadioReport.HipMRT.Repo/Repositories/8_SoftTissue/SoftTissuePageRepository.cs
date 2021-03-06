using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class SoftTissuePageRepository : PageRepositoryBase<SoftTissuePage>, ISoftTissuePageRepository
    {
        public SoftTissuePageRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }

		public override Task<SoftTissuePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SoftTissuePage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SoftTissuePage.Findings) });
        }

		protected  override void UpdateCollections(SoftTissuePage model)
		{
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
		}
	}
}
