using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class SpleenFindingPresetRepository : PresetRepositoryBase<SpleenFindingPreset>, ISpleenFindingPresetRepository
    {
        public SpleenFindingPresetRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SpleenFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != SpleenDiagnosisType.None;
        protected override Expression<Func<SpleenFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SpleenFindingType findingType) =>
            await DataContext.Set<SpleenFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SpleenFindingPreset> GetByDiagnosisValue(SpleenDiagnosisType diagnosis) =>
            await DataContext.Set<SpleenFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosis == diagnosis);
    }
}
