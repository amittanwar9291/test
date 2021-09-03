using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class MeningesPageRepository : PageRepositoryBase<MeningesPage>, IMeningesPageRepository
    {
        public MeningesPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<MeningesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MeningesPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MeningesPage.Findings) });
        }

        protected override void UpdateCollections(MeningesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
