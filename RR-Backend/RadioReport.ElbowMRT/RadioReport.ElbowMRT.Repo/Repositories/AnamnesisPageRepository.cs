using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AnamnesisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnamnesisPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AnamnesisPage.Findings) });
        }

        protected override void UpdateCollections(AnamnesisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
