using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class BrainstemCranialNervesFindingPresetRepository : PresetRepositoryBase<BrainstemCranialNervesFindingPreset>, IBrainstemCranialNervesFindingPresetRepository
    {
        public BrainstemCranialNervesFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BrainstemCranialNervesFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != BrainstemCranialNervesDiagnosisType.None;
        protected override Expression<Func<BrainstemCranialNervesFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<BrainstemCranialNervesFindingPreset> GetByDiagnosisValue(BrainstemCranialNervesFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<BrainstemCranialNervesFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != BrainstemCranialNervesFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.DifferentialDiagnosisType != BrainstemCranialNervesDiagnosisType.None)
            {
                preset = preset.Where(p => p.DifferentialDiagnosis == diagnosisParams.DifferentialDiagnosisType);
            }

            return await preset.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BrainstemCranialNervesFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<BrainstemCranialNervesFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != BrainstemCranialNervesFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            return await preset.Select(DdSelectExpr).ToListAsync();
        }
    }
}
