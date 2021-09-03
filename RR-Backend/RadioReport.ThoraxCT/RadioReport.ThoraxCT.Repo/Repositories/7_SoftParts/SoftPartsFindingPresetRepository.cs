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
    public class SoftPartsFindingPresetRepository : PresetRepositoryBase<SoftPartsFindingPreset>, ISoftPartsFindingPresetRepository
    {
        public SoftPartsFindingPresetRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftPartsFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != SoftPartsDiagnosisType.None;
        protected override Expression<Func<SoftPartsFindingPreset, string>> DdSelectExpr => p => p.DifferentialDiagnosis.ToString();

        public override async Task<IEnumerable<string>> GetAllAvailableDiagnosis() =>
            await DataContext.Set<SoftPartsFindingPreset>().Where(DdWhereExpr).Select(DdSelectExpr).Distinct().ToListAsync();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftPartsFindingType findingType) =>
            await DataContext.Set<SoftPartsFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SoftPartsFindingPreset> GetByDiagnosisValue(SoftPartsFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
            var preset = DataContext.Set<SoftPartsFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != SoftPartsFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.DifferentialDiagnosis != SoftPartsDiagnosisType.None)
            {
                preset = preset.Where(p => p.DifferentialDiagnosis == diagnosisParams.DifferentialDiagnosis);
            }

            return await preset.FirstOrDefaultAsync();
        }
    }
}
