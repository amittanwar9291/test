using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class FindingTemplatesRepository : PresetRepositoryBase<DiagnosisFindingTemplate>, IFindingTemplatesRepository
    {
        public FindingTemplatesRepository(MammaMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<DiagnosisFindingTemplate, bool>> DdWhereExpr => p => p.DiagnosisType != DiagnosisType.None;
        protected override Expression<Func<DiagnosisFindingTemplate, string>> DdSelectExpr => c => c.DiagnosisType.ToString();

        public async Task<DiagnosisFindingTemplate> GetByDiagnosisValue(DiagnosisType diagnosisValue)
        {
            var result = await DataContext.Set<DiagnosisFindingTemplate>()
                .FirstOrDefaultAsync(f => f.DiagnosisType == diagnosisValue);

            return result;
        }
    }
}
