using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Enums.Bones;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != BonesDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(BonesDiagnosisType diagnosis)
        {
            return await DataContext
                    .Set<BonesFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);
        }
    }
}