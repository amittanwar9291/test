using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.BonesDifferentialDiagnosisType != BonesDifferentialDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => p => p.BonesDifferentialDiagnosisType.ToString();

        public override async Task<IEnumerable<string>> GetAllAvailableDiagnosis() =>
            await DataContext.Set<BonesFindingPreset>().Where(DdWhereExpr).Select(DdSelectExpr).Distinct().ToListAsync();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await DataContext.Set<BonesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(BonesFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
            var preset = DataContext.Set<BonesFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != BonesFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.BonesDifferentialDiagnosisType != BonesDifferentialDiagnosisType.None)
            {
                preset = preset.Where(p => p.BonesDifferentialDiagnosisType == diagnosisParams.BonesDifferentialDiagnosisType);
            }

            return await preset.FirstOrDefaultAsync();
        }
    }
}
