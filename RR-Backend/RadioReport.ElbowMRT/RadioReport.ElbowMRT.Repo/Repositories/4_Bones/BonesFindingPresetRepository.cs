using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ElbowMRT.Domain.Enums.Bones;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(ElbowMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != DiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(DiagnosisType diagnosis)
        {
            return await DataContext
                .Set<BonesFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType)
        {
            return await DataContext.Set<BonesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();
        }
    }
}