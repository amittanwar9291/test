using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.FeetMRT.Repo.Repositories
{
	public class SoftTissuePageRepository : PageRepositoryBase<SoftTissuePage>, ISoftTissuePageRepository
	{
		public SoftTissuePageRepository(FeetMRTDbContext dbContext) : base(dbContext)
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
