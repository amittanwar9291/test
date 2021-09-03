using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class AnamnesisPageRepository : PageRepositoryBase<AnamnesisPage>, IAnamnesisPageRepository
    {
        public AnamnesisPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AnamnesisPage> GetByIdAsync(Guid Id, Expression<Func<AnamnesisPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(Id, new[] { nameof(AnamnesisPage.ClinicFindings), nameof(AnamnesisPage.PreviousOperationFindings) });
        }

        protected override void UpdateCollections(AnamnesisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.PreviousOperationFindings);
            UpdateCollection(model.ClinicFindings);
        }
    }
}
