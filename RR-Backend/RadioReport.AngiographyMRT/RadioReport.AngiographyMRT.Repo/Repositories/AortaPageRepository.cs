using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;

namespace RadioReport.AngiographyMRT.Repo.Repositories
{
    public class AortaPageRepository : PageRepositoryBase<AortaPage>, IAortaPageRepository
    {
        public AortaPageRepository(AngiographyMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AortaPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AortaPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AortaPage.Findings) });
        }

        protected override void UpdateCollections(AortaPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
