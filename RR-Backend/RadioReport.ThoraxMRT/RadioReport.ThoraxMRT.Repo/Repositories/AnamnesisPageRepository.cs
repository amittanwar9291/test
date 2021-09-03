using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AnamnesisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnamnesisPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AnamnesisPage.AnamnesisFindings), nameof(AnamnesisPage.IndicationFindings) });
        }

        protected override void UpdateCollections(AnamnesisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.AnamnesisFindings);
            UpdateCollection(model.IndicationFindings);
        }
    }
}
