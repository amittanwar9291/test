using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class SupraaorticVesselsPageRepository : PageRepositoryBase<SupraaorticVesselsPage>, ISupraaorticVesselsPageRepository
    {
        public SupraaorticVesselsPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
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
