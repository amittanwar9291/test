using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class PelvicFloorPageRepository : PageRepositoryBase<PelvicFloorPage>, IPelvicFloorPageRepository
    {
        public PelvicFloorPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
        
        public override Task<PelvicFloorPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PelvicFloorPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(PelvicFloorPage.Findings) });
        }

        protected override void UpdateCollections(PelvicFloorPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
