using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class PatientIndicationPageRepository : PageRepositoryBase<PatientIndicationPage>, IPatientIndicationPageRepository
    {
        public PatientIndicationPageRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<PatientIndicationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PatientIndicationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(PatientIndicationPage.Findings), nameof(PatientIndicationPage.PatientInformation) });
        }

        protected override void UpdateCollections(PatientIndicationPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }

        public override PatientIndicationPage Update(PatientIndicationPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            DataContext.Set<PatientInformation>().Update(model.PatientInformation);
            var result = base.Update(model);
            return result;
        }
    }
}