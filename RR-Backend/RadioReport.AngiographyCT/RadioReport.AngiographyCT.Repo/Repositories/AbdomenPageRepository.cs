using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AbdomenPageRepository : PageRepositoryBase<AbdomenPage>, IAbdomenPageRepository
    {
        public AbdomenPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AbdomenPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AbdomenPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AbdomenPage.Findings) });
        }

        protected override void UpdateCollections(AbdomenPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
