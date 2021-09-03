using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class SoftTissueFindingPresetRepository : PresetRepositoryBase<SoftTissueFindingPreset>, ISoftTissueFindingPresetRepository
    {
        public SoftTissueFindingPresetRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftTissueFindingPreset, bool>> DdWhereExpr => p => p.MainFeaturesDifferentialDiagnosisType != SoftTissueDifferentialDiagnosisType.None;
        protected override Expression<Func<SoftTissueFindingPreset, string>> DdSelectExpr => p => p.MainFeaturesDifferentialDiagnosisType.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType) =>
            await DataContext.Set<SoftTissueFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SoftTissueFindingPreset> GetByDiagnosisValue(SoftTissueDifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<SoftTissueFindingPreset>().FirstOrDefaultAsync(preset => preset.MainFeaturesDifferentialDiagnosisType == diagnosis);
    }
}