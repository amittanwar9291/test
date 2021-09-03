using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class CortexFindingPresetRepository : PresetRepositoryBase<CortexFindingPreset>, ICortexFindingPresetRepository
    {
        public CortexFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<CortexFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosisType != CortexDifferentialDiagnosisType.None;
        protected override Expression<Func<CortexFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosisType.ToString();

        public async Task<CortexFindingPreset> GetByDiagnosisValue(CortexFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<CortexFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != CortexFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.DifferentialDiagnosisType != CortexDifferentialDiagnosisType.None)
            {
                preset = preset.Where(p => p.DifferentialDiagnosisType == diagnosisParams.DifferentialDiagnosisType);
            }

            return await preset.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(CortexFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<CortexFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != CortexFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            return await preset.Select(DdSelectExpr).ToListAsync();
        }
    }
}
