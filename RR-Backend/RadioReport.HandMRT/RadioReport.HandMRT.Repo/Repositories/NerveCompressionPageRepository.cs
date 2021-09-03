using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class NerveCompressionPageRepository : PageRepositoryBase<NerveCompressionPage>, INerveCompressionPageRepository
    {
        public NerveCompressionPageRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<NerveCompressionPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<NerveCompressionPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(NerveCompressionPage.Findings) });
        }
        protected override void UpdateCollections(NerveCompressionPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
