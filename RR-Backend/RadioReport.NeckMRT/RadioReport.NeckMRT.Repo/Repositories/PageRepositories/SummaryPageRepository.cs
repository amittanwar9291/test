using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SummaryPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SummaryPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SummaryPage.TNMClassifications) });
        }
        protected override void UpdateCollections(SummaryPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.TNMClassifications);
        }   
    }
}
