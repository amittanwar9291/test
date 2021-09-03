using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class TendinopathyPageRepository : PageRepositoryBase<TendinopathyPage>, ITendinopathyPageRepository
    {
        public TendinopathyPageRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<TendinopathyPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<TendinopathyPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(TendinopathyPage.Findings) });
        }
        protected override void UpdateCollections(TendinopathyPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }    
    }
}
