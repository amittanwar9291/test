using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MedicalHistoryPageRepository : PageRepositoryBase<MedicalHistoryPage>, IMedicalHistoryPageRepository
    {
        public MedicalHistoryPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<MedicalHistoryPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MedicalHistoryPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MedicalHistoryPage.OwnFamilyAnamnesisFindings), nameof(MedicalHistoryPage.PreviousTherapiesFindings) });
        }

        protected override void UpdateCollections(MedicalHistoryPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.OwnFamilyAnamnesisFindings);
            UpdateCollection(model.PreviousTherapiesFindings);
        }
    }
}