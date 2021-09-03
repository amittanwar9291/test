using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SpinalCanalPageRepository : PageRepositoryBase<SpinalCanalPage>, ISpinalCanalPageRepository
    {
        public SpinalCanalPageRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SpinalCanalPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SpinalCanalPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SpinalCanalPage.Findings) });
        }

        protected override void UpdateCollections(SpinalCanalPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
