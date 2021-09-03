using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class PelvisLegArteriesPageRepository : PageRepositoryBase<PelvisLegArteriesPage>, IPelvisLegArteriesPageRepository
    {
        public PelvisLegArteriesPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<PelvisLegArteriesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PelvisLegArteriesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(PelvisLegArteriesPage.Findings) });
        }

        protected override void UpdateCollections(PelvisLegArteriesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
