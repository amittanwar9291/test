using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class FemaleGenderPageRepository : PageRepositoryBase<FemaleGenderPage>, IFemaleGenderPageRepository
    {
        public FemaleGenderPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
        
        public override Task<FemaleGenderPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<FemaleGenderPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(FemaleGenderPage.Findings) });
        }

        protected override void UpdateCollections(FemaleGenderPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
