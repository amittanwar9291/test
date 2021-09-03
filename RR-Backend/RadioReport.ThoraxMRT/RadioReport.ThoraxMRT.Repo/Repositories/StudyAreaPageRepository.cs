using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class StudyAreaPageRepository : PageRepositoryBase<StudyAreaPage>, IStudyAreaPageRepository
    {
        public StudyAreaPageRepository(ThoraxMRTDbContext dbContext) : base(dbContext)
        {
        }

        public override Task<StudyAreaPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<StudyAreaPage, bool>> predicate = null)
        {
            return base.GetByIdAsync(id, new[] { nameof(StudyAreaPage.PatientInformation) });
        }

        public override StudyAreaPage Update(StudyAreaPage model)
        {
            var result = DataContext.Set<StudyAreaPage>().Update(model);

            return result.Entity;
        }
    }
}
