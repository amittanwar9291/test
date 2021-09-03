using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class SoftPartsPageRepository : PageRepositoryBase<SoftPartsPage>, ISoftPartsPageRepository
    {
        public SoftPartsPageRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<SoftPartsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SoftPartsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(SoftPartsPage.Findings), nameof(SoftPartsPage.Findings) + "." + nameof(SoftPartsFinding.MusculatureFindings) });
        }

        protected override void UpdateCollections(SoftPartsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            UpdateCollection(model.Findings);

            if (model?.Findings != null)
            {
                foreach (var item in model.Findings)
                {
                    UpdateCollection(item.MusculatureFindings);
                }
            }
        }
    }
}
