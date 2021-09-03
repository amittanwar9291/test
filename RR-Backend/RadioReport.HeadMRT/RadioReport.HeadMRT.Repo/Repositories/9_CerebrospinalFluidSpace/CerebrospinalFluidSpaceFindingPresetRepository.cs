using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class CerebrospinalFluidSpaceFindingPresetRepository : PresetRepositoryBase<CerebrospinalFluidSpaceFindingPreset>, ICerebrospinalFluidSpaceFindingPresetRepository
    {
        public CerebrospinalFluidSpaceFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<CerebrospinalFluidSpaceFindingPreset, bool>> DdWhereExpr => p => p.MassDifferentialDiagnosisIKnow1Type != CerebrospinalMassDiagnosisType.None;
        protected override Expression<Func<CerebrospinalFluidSpaceFindingPreset, string>> DdSelectExpr => c => c.MassDifferentialDiagnosisIKnow1Type.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(CerebrospinalFluidSpaceFindingType findingType) =>
            await DataContext.Set<CerebrospinalFluidSpaceFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<CerebrospinalFluidSpaceFindingPreset> GetByDiagnosisValue(CerebrospinalMassDiagnosisType diagnosis) =>
            await DataContext.Set<CerebrospinalFluidSpaceFindingPreset>().FirstOrDefaultAsync(p => p.MassDifferentialDiagnosisIKnow1Type == diagnosis);
    }
}
