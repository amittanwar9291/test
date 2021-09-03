using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AnamnesisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnamnesisPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AnamnesisPage.OwnFamilyAnamnesisFindings), nameof(AnamnesisPage.PreviousTherapiesFindings) });
        }

        protected override void UpdateCollections(AnamnesisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.OwnFamilyAnamnesisFindings);
            UpdateCollection(model.PreviousTherapiesFindings);
        }
    }
}
