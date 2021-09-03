using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class BladderPageRepository : PageRepositoryBase<BladderPage>, IBladderPageRepository
    {
        public BladderPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<BladderPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<BladderPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(BladderPage.Findings) });
        }

        protected override void UpdateCollections(BladderPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
