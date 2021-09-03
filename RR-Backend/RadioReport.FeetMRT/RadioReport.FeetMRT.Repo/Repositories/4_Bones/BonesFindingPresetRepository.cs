using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.FeetMRT.Domain.Enums.Bones;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(FeetMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.SpaceRequirementDifferentialDiagnosis != DifferentialDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.SpaceRequirementDifferentialDiagnosis.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await DataContext.Set<BonesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<BonesFindingPreset>().FirstOrDefaultAsync(p => p.SpaceRequirementDifferentialDiagnosis == diagnosis);
    }
}
