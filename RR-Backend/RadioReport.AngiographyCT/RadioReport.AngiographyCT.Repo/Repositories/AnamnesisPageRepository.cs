using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }
        
        public override Task<AnamnesisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AnamnesisPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AnamnesisPage.IndicationFindings), nameof(AnamnesisPage.PriorInterventionsFindings) });
        }

        protected override void UpdateCollections(AnamnesisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.IndicationFindings);
            UpdateCollection(model.PriorInterventionsFindings);

        }
    }
}
