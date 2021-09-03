using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.FeetMRT.Repo.Repositories
{
	public class LigamentsAndTendonsPageRepository : PageRepositoryBase<LigamentsAndTendonsPage>, ILigamentsAndTendonsPageRepository
	{
		public LigamentsAndTendonsPageRepository(FeetMRTDbContext dbContext) : base(dbContext)
		{
		}

		public override Task<LigamentsAndTendonsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LigamentsAndTendonsPage, bool>> predicate = null)
		{
			return base.GetByIdAsync(id, new[] { nameof(LigamentsAndTendonsPage.Findings) });
		}

		protected override void UpdateCollections(LigamentsAndTendonsPage model)
		{
            if (model == null) throw new ArgumentNullException(nameof(model));
            
			UpdateCollection(model.Findings);
		}
	}
}
