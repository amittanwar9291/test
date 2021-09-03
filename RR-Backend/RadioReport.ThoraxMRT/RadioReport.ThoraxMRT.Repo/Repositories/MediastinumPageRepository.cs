using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class MediastinumPageRepository : PageRepositoryBase<MediastinumPage>, IMediastinumPageRepository
    {
        public MediastinumPageRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
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
