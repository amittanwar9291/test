using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class CapsuleAndRibbonsPageRepository : PageRepositoryBase<CapsuleAndRibbonsPage>, ICapsuleAndRibbonsPageRepository
    {
        public CapsuleAndRibbonsPageRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<CapsuleAndRibbonsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CapsuleAndRibbonsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CapsuleAndRibbonsPage.Findings) });
        }
        protected override void UpdateCollections(CapsuleAndRibbonsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }     
    }
}
