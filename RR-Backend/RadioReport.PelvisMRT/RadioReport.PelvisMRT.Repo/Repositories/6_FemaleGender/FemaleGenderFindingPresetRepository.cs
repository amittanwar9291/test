using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class FemaleGenderFindingPresetRepository : PresetRepositoryBase<FemaleGenderFindingPreset>, IFemaleGenderFindingPresetRepository
    {
        public FemaleGenderFindingPresetRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<FemaleGenderFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != FemaleGenderDiagnosisType.None;
        protected override Expression<Func<FemaleGenderFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public override async Task<IEnumerable<string>> GetAllAvailableDiagnosis() =>
            await DataContext.Set<FemaleGenderFindingPreset>().Where(DdWhereExpr).Select(DdSelectExpr).Distinct().ToListAsync();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(FemaleGenderFindingType findingType) =>
            await DataContext.Set<FemaleGenderFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).Distinct().ToListAsync();

        public async Task<FemaleGenderFindingPreset> GetByDiagnosisValue(FemaleGenderFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
            var preset = DataContext.Set<FemaleGenderFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != FemaleGenderFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.DifferentialDiagnosis != FemaleGenderDiagnosisType.None)
            {
                preset = preset.Where(p => p.DifferentialDiagnosis == diagnosisParams.DifferentialDiagnosis);
            }

            return await preset.FirstOrDefaultAsync(p => p.DegenerationType1 == diagnosisParams.DegenerationType1);
        }
    }
}
