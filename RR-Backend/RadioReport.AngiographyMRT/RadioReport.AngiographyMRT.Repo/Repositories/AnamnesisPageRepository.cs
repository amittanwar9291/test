using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
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
