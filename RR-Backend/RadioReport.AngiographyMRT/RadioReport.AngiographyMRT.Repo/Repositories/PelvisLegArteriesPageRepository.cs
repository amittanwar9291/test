using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class PelvisLegArteriesPageRepository : PageRepositoryBase<PelvisLegArteriesPage>, IPelvisLegArteriesPageRepository
    {
        public PelvisLegArteriesPageRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
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
