using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class FacialSkullFindingPresetRepository : PresetRepositoryBase<FacialSkullFindingPreset>, IFacialSkullFindingPresetRepository
    {
        public FacialSkullFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<FacialSkullFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != "None";
        protected override Expression<Func<FacialSkullFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis;

        public async Task<FacialSkullFindingPreset> GetByDiagnosisValue(FacialSkullFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<FacialSkullFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != FacialSkullFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (!string.IsNullOrEmpty(diagnosisParams.DifferentialDiagnosisType) && diagnosisParams.DifferentialDiagnosisType != "None")
            {
                preset = preset.Where(p => p.DifferentialDiagnosis == diagnosisParams.DifferentialDiagnosisType);
            }

            return await preset.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(FacialSkullFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<FacialSkullFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != FacialSkullFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            return await preset.Select(DdSelectExpr).ToListAsync();
        }
    }
}
