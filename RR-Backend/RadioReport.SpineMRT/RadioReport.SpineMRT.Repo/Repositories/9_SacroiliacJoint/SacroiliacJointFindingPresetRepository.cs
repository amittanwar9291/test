using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SacroiliacJointFindingPresetRepository : PresetRepositoryBase<SacroiliacJointFindingPreset>, ISacroiliacJointFindingPresetRepository
    {
        public SacroiliacJointFindingPresetRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SacroiliacJointFindingPreset, bool>> DdWhereExpr => p => p.IKnowDifferentialDiagnosis01 != SacroiliacJointDiagnosisType.None;
        protected override Expression<Func<SacroiliacJointFindingPreset, string>> DdSelectExpr => c => c.IKnowDifferentialDiagnosis01.ToString();
      
        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SacroiliacJointFindingType findingType) =>
            await DataContext.Set<SacroiliacJointFindingPreset>().Where(p => p.FindingType == findingType)
                .Select(DdSelectExpr).ToListAsync();

        public async Task<SacroiliacJointFindingPreset> GetByDiagnosisValue(SacroiliacJointDiagnosisType diagnosis)
        {
            return await DataContext
                    .Set<SacroiliacJointFindingPreset>().FirstOrDefaultAsync(preset => preset.IKnowDifferentialDiagnosis01 == diagnosis);
        }
    }
}
