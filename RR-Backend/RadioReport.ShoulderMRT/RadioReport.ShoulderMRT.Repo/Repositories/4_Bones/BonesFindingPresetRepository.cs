using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.TumorDifferentialDiagnosis != TumorDifferentialDiagnosis.None;

        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.TumorDifferentialDiagnosis.ToString();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(TumorDifferentialDiagnosis diagnosis)
        {
            return await DataContext
                    .Set<BonesFindingPreset>().FirstOrDefaultAsync(preset => preset.TumorDifferentialDiagnosis == diagnosis);
        }
    }
}
