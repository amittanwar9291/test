using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class MediastinumPageRepository : PageRepositoryBase<MediastinumPage>, IMediastinumPageRepository
    {
        public MediastinumPageRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<MediastinumPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MediastinumPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MediastinumPage.Findings) });
        }

        protected override void UpdateCollections(MediastinumPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
