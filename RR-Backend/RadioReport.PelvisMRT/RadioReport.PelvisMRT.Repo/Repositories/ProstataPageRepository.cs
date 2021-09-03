using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class ProstataPageRepository : PageRepositoryBase<ProstataPage>, IProstataPageRepository
    {
        public ProstataPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
        
        public override Task<ProstataPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<ProstataPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(ProstataPage.Findings) });
        }

        protected override void UpdateCollections(ProstataPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
