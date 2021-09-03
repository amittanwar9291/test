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
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.MainCharacteristicsDifferentialDiagnosis01 != BonesDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.MainCharacteristicsDifferentialDiagnosis01.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType)
        {
            return await DataContext.Set<BonesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();
        }

        public async Task<BonesFindingPreset> GetByDiagnosisValue(BonesFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<BonesFindingPreset>().AsQueryable();

            if (diagnosisParams.BonesDiagnosisType != BonesDiagnosisType.None)
            {
                preset = preset.Where(p => p.MainCharacteristicsDifferentialDiagnosis01 == diagnosisParams.BonesDiagnosisType);
            }

            if (diagnosisParams.FindingType != BonesFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            return await preset.FirstOrDefaultAsync();
        }
    }
}
