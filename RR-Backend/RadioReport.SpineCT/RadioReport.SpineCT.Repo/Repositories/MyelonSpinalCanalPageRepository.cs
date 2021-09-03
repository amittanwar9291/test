using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class MyelonSpinalCanalPageRepository : PageRepositoryBase<MyelonSpinalCanalPage>, IMyelonSpinalCanalPageRepository
    {
        public MyelonSpinalCanalPageRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<MyelonSpinalCanalPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MyelonSpinalCanalPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MyelonSpinalCanalPage.Findings) });
        }

        protected override void UpdateCollections(MyelonSpinalCanalPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
