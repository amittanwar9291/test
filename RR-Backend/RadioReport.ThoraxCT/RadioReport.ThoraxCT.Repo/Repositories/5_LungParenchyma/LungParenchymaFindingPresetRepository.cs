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
    public class LungParenchymaFindingPresetRepository : PresetRepositoryBase<LungParenchymaFindingPreset>, ILungParenchymaFindingPresetRepository
    {
        public LungParenchymaFindingPresetRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<LungParenchymaFindingPreset, bool>> DdWhereExpr => p => p.MainCharacteristicsDifferentialDiagnosis01 != LungParenchymaDiagnosisType.None;
        protected override Expression<Func<LungParenchymaFindingPreset, string>> DdSelectExpr => p => p.MainCharacteristicsDifferentialDiagnosis01.ToString();

        public override async Task<IEnumerable<string>> GetAllAvailableDiagnosis() =>
            await DataContext.Set<LungParenchymaFindingPreset>().Where(DdWhereExpr).Select(DdSelectExpr).Distinct().ToListAsync();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(LungParenchymaFindingType findingType) =>
            await DataContext.Set<LungParenchymaFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<LungParenchymaFindingPreset> GetByDiagnosisValue(LungParenchymaFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
            var preset = DataContext.Set<LungParenchymaFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != LungParenchymaFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.MainCharacteristicsDifferentialDiagnosis01 != LungParenchymaDiagnosisType.None)
            {
                preset = preset.Where(p => p.MainCharacteristicsDifferentialDiagnosis01 == diagnosisParams.MainCharacteristicsDifferentialDiagnosis01);
            }

            return await preset.FirstOrDefaultAsync();
        }
    }
}
