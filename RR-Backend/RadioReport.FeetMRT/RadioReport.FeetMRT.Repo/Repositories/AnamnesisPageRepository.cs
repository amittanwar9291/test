using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models.Anamnesis;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }

		public override Task<AnamnesisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnamnesisPage, bool>> predicate = null)
		{
			return base.GetByIdAsync(id, new[] { nameof(AnamnesisPage.Indications) });
		}

		protected override void UpdateCollections(AnamnesisPage model)
		{
            if (model == null) throw new ArgumentNullException(nameof(model));
            
			UpdateCollection(model.Indications);
		}
    }
}
