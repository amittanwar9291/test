using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;

namespace RadioReport.AngiographyCT.Repo.Repositories
{
    public class AortaPageRepository : PageRepositoryBase<AortaPage>, IAortaPageRepository
    {
        public AortaPageRepository(AngiographyCTDbContext dbContext) : base(dbContext)
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
