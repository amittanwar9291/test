using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class FacialSkullPageRepository : PageRepositoryBase<FacialSkullPage>, IFacialSkullPageRepository
    {
        public FacialSkullPageRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<FacialSkullPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<FacialSkullPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(FacialSkullPage.Findings) });
        }

        protected override void UpdateCollections(FacialSkullPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);
        }
    }
}
