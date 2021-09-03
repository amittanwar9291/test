using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class BasalNucleiPageRepository : PageRepositoryBase<BasalNucleiPage>, IBasalNucleiPageRepository
    {
        public BasalNucleiPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<BasalNucleiPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<BasalNucleiPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(BasalNucleiPage.Findings) });
        }
        protected override void UpdateCollections(BasalNucleiPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
