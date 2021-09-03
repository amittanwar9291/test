using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SpinalCanalFindingPresetRepository : PresetRepositoryBase<SpinalCanalFindingPreset>, ISpinalCanalFindingPresetRepository
    {
        public SpinalCanalFindingPresetRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SpinalCanalFindingPreset, bool>> DdWhereExpr => p => p.SpinalCanalDifferentialDiagnosisType != SpinalCanalDifferentialDiagnosisType.None;
        protected override Expression<Func<SpinalCanalFindingPreset, string>> DdSelectExpr => c => c.SpinalCanalDifferentialDiagnosisType.ToString();

        public async Task<SpinalCanalFindingPreset> GetByDiagnosisValue(SpinalCanalFindingPresetRequest diagnosis)
        {
            if (diagnosis == null) throw new ArgumentNullException(nameof(diagnosis));

            var preset = DataContext.Set<SpinalCanalFindingPreset>().AsQueryable();
                
            if (diagnosis.SpinalCanalDifferentialDiagnosisType != SpinalCanalDifferentialDiagnosisType.None)
            {
                preset = preset.Where(p => p.SpinalCanalDifferentialDiagnosisType == diagnosis.SpinalCanalDifferentialDiagnosisType);
            }

            if (diagnosis.FindingType != SpinalCanalFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosis.FindingType);
            }

            if (diagnosis.SpinalCanalLocation != SpinalCanalLocations.None)
            {
                preset = preset.Where(p => p.SpinalCanalLocation == diagnosis.SpinalCanalLocation);
            }

            return await preset.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SpinalCanalFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<SpinalCanalFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != SpinalCanalFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.SpinalCanalLocation != SpinalCanalLocations.None)
            {
                preset = preset.Where(p => p.SpinalCanalLocation == diagnosisParams.SpinalCanalLocation);
            }

            return await preset.Select(DdSelectExpr).ToListAsync();
        }
    }
}
