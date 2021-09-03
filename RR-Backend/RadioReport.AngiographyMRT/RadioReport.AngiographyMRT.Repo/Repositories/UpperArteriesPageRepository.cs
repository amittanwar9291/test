using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class UpperArteriesPageRepository : PageRepositoryBase<UpperArteriesPage>, IUpperArteriesPageRepository
    {
        public UpperArteriesPageRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<UpperArteriesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<UpperArteriesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(UpperArteriesPage.Findings) });
        }
        protected override void UpdateCollections(UpperArteriesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
