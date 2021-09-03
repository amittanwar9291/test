using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class UpperArteriesPageRepository : PageRepositoryBase<UpperArteriesPage>, IUpperArteriesPageRepository
    {
        public UpperArteriesPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
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
