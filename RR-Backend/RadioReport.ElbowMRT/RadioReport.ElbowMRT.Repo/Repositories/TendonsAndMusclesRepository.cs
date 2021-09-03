using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class TendonsAndMusclesPageRepository : PageRepositoryBase<TendonsAndMusclesPage>, ITendonsAndMusclesPageRepository
    {
        public TendonsAndMusclesPageRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<TendonsAndMusclesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<TendonsAndMusclesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(TendonsAndMusclesPage.Findings) });
        }

        protected override void UpdateCollections(TendonsAndMusclesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
