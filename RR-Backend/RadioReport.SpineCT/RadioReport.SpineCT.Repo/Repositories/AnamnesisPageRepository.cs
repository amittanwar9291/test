using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AnamnesisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnamnesisPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AnamnesisPage.AnamnesisIndications), nameof(AnamnesisPage.PreviousInterventions) });
        }

        protected override void UpdateCollections(AnamnesisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.AnamnesisIndications);
            UpdateCollection(model.PreviousInterventions);
        }
    }
}
