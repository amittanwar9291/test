using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class BrainstemCranialNervesPageRepository : PageRepositoryBase<BrainstemCranialNervesPage>, IBrainstemCranialNervesPageRepository
    {
        public BrainstemCranialNervesPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<BrainstemCranialNervesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<BrainstemCranialNervesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(BrainstemCranialNervesPage.Findings) });
        }

        protected override void UpdateCollections(BrainstemCranialNervesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
