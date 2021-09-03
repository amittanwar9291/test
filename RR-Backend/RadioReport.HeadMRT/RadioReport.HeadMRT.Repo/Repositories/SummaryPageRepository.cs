using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SummaryPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SummaryPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SummaryPage.Findings) });
        }

        protected override void UpdateCollections(SummaryPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
