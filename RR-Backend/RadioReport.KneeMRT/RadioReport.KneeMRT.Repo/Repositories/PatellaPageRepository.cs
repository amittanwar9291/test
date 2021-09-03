using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class PatellaPageRepository : PageRepositoryBase<PatellaPage>, IPatellaPageRepository
    {
        public PatellaPageRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<PatellaPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PatellaPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(PatellaPage.Findings) });
        }

        protected override void UpdateCollections(PatellaPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
