using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.AbdomenCT.Domain.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class MedicalHistoryPageRepository : PageRepositoryBase<MedicalHistoryPage>, IMedicalHistoryPageRepository
    {
        public MedicalHistoryPageRepository(AbdomenCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<MedicalHistoryPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MedicalHistoryPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MedicalHistoryPage.Indications), nameof(MedicalHistoryPage.Clinics) });
        }

        public override MedicalHistoryPage Update(MedicalHistoryPage model)
        {
            var result = DataContext.Set<MedicalHistoryPage>().Update(model);

            UpdateCollection(model.Indications);
            UpdateCollection(model.Clinics);

            return result.Entity;
        }
    }
}