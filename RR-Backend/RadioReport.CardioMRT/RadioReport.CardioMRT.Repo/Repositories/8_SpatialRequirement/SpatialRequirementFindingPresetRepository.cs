using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class SpatialRequirementFindingPresetRepository: PresetRepositoryBase<SpatialRequirementFindingPreset>, ISpatialRequirementFindingPresetRepository
    {
        public SpatialRequirementFindingPresetRepository(CardioMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SpatialRequirementFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis01 != SpatialRequirementDiagnosisType.None;
        protected override Expression<Func<SpatialRequirementFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis01.ToString();

        public async Task<SpatialRequirementFindingPreset> GetByDiagnosisValue(SpatialRequirementDiagnosisType diagnosis)
        {
            return await DataContext
                .Set<SpatialRequirementFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis01 == diagnosis);
        }
    }
}
