using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenCT.Domain.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;

namespace RadioReport.AbdomenCT.Repo.Repositories
{
    public class AreaOfInvestigationPageRepository : PageRepositoryBase<AreaOfInvestigationPage>, IAreaOfInvestigationPageRepository
    {
        public AreaOfInvestigationPageRepository(AbdomenCTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<AreaOfInvestigationPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AreaOfInvestigationPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(AreaOfInvestigationPage.PatientInformation) });
        }

        public override AreaOfInvestigationPage Update(AreaOfInvestigationPage model)
        {
            var result = DataContext.Set<AreaOfInvestigationPage>().Update(model);

            return result.Entity;
        }
    }
}