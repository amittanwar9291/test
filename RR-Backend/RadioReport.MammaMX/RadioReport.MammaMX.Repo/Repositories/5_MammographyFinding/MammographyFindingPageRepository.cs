using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammographyFindingPageRepository : PageRepositoryBase<MammographyFindingPage>, IMammographyFindingPageRepository
    {
        public MammographyFindingPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<MammographyFindingPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MammographyFindingPage, bool>> predicate = null) =>
            base.GetByIdAsync(id, new[] { nameof(MammographyFindingPage.Findings) });
        
        protected override void UpdateCollections(MammographyFindingPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}