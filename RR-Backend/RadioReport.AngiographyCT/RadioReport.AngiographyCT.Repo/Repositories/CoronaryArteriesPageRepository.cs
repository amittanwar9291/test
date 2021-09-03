using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class CoronaryArteriesPageRepository : PageRepositoryBase<CoronaryArteriesPage>, ICoronaryArteriesPageRepository
    {
        public CoronaryArteriesPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<CoronaryArteriesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CoronaryArteriesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CoronaryArteriesPage.Findings) });
        }

        protected override void UpdateCollections(CoronaryArteriesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
