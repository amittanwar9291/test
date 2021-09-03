using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class MusclesAndTendonsPageRepository : PageRepositoryBase<MusclesAndTendonsPage>, IMusclesAndTendonsPageRepository
    {
        public MusclesAndTendonsPageRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<MusclesAndTendonsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MusclesAndTendonsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MusclesAndTendonsPage.Findings) });
        }
        protected override void UpdateCollections(MusclesAndTendonsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
