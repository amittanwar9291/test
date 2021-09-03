using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class IndicationPageRepository : PageRepositoryBase<IndicationPage>, IIndicationPageRepository
    {
        public IndicationPageRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<IndicationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<IndicationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(IndicationPage.Indications), nameof(IndicationPage.PreviousTherapies) });
        }
        protected override void UpdateCollections(IndicationPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Indications);
            UpdateCollection(model.PreviousTherapies);
        }   
    }
}
