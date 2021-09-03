using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class SummaryPageRepository : PageRepositoryBase<SummaryPage>, ISummaryPageRepository
    {
        public SummaryPageRepository(MammaMXDbContext dbContext): base(dbContext)
        {
        }

        public override Task<SummaryPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SummaryPage, bool>> predicate = null) =>
            base.GetByIdAsync(id, new[]
            {
                nameof(SummaryPage.FindingRelations),
                nameof(SummaryPage.FindingRelations) + "." + nameof(FindingRelation.MammographyFinding),
                nameof(SummaryPage.FindingRelations) + "." + nameof(FindingRelation.UltrasoundFinding)
            });      

        protected override void UpdateCollections(SummaryPage model)
        {
            model?.FindingRelations?.ToList().ForEach(f => f.UltrasoundFindingId = f.IsNoCorrelation ? null : f.UltrasoundFindingId);
            UpdateCollection(model.FindingRelations);
        }
    }
}
