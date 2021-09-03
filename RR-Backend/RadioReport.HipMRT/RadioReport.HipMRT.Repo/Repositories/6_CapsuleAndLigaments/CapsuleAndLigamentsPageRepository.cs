using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class CapsuleAndLigamentsPageRepository : PageRepositoryBase<CapsuleAndLigamentsPage>, ICapsuleAndLigamentsPageRepository
    {
        public CapsuleAndLigamentsPageRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }
        public override Task<CapsuleAndLigamentsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CapsuleAndLigamentsPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(CapsuleAndLigamentsPage.Findings) });
        }
        protected override void UpdateCollections(CapsuleAndLigamentsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}