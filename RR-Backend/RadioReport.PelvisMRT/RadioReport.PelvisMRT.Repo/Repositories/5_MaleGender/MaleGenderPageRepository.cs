using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class MaleGenderPageRepository : PageRepositoryBase<MaleGenderPage>, IMaleGenderPageRepository
    {
        public MaleGenderPageRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }
        
        public override Task<MaleGenderPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MaleGenderPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(MaleGenderPage.Findings) });
        }

        protected override void UpdateCollections(MaleGenderPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            UpdateCollection(model.Findings);
        }
    }
}
