using System;
using System.Linq.Expressions;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;
using System.Threading.Tasks;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class PericardiumVesselsPageRepository : PageRepositoryBase<PericardiumVesselsPage>, IPericardiumVesselsPageRepository
    {
        public PericardiumVesselsPageRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<PericardiumVesselsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PericardiumVesselsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(PericardiumVesselsPage.Findings) });
        }
        protected override void UpdateCollections(PericardiumVesselsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
