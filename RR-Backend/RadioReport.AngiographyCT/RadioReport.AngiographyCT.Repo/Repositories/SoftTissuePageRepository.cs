using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class SoftTissuePageRepository : PageRepositoryBase<SoftTissuePage>, ISoftTissuePageRepository
    {
        public SoftTissuePageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SoftTissuePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SoftTissuePage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SoftTissuePage.Findings) });
        }

        protected override void UpdateCollections(SoftTissuePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
