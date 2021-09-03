using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => p.TumorDifferentialDiagnosisType != TumorDifferentialDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => c.TumorDifferentialDiagnosisType.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await DataContext.Set<BonesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(TumorDifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<BonesFindingPreset>().FirstOrDefaultAsync(p => p.TumorDifferentialDiagnosisType == diagnosis);
    }
}
