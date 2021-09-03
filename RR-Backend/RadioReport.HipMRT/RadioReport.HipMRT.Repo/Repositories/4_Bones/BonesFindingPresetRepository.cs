using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Interfaces;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.HipMRT.Domain.Models.Bones;
using RadioReport.HipMRT.Bones.Domain.Enums;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.MainDiagnosisType != MassOsteolysisDifferentialDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.MainDiagnosisType.ToString();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(MassOsteolysisDifferentialDiagnosisType diagnosis)
        {
            return await DataContext
                    .Set<BonesFindingPreset>().FirstOrDefaultAsync(preset => preset.MainDiagnosisType == diagnosis);
        }
    }
}