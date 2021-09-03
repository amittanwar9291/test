using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;


namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class OsteoInterfacePageRepository : PageRepositoryBase<OsteoInterfacePage>, IOsteoInterfacePageRepository
    {
        public OsteoInterfacePageRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<OsteoInterfacePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<OsteoInterfacePage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(OsteoInterfacePage.Findings) });
        }
        protected override void UpdateCollections(OsteoInterfacePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
