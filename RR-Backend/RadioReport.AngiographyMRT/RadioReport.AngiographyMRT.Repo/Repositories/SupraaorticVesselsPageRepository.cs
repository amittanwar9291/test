using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class SupraaorticVesselsPageRepository : PageRepositoryBase<SupraaorticVesselsPage>, ISupraaorticVesselsPageRepository
    {
        public SupraaorticVesselsPageRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SupraaorticVesselsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SupraaorticVesselsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SupraaorticVesselsPage.Findings) });
        }

        protected override void UpdateCollections(SupraaorticVesselsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
