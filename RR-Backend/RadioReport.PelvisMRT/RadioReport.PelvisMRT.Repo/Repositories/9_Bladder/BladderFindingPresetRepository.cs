using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Enums.Bladder;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class BladderFindingPresetRepository : PresetRepositoryBase<BladderFindingPreset>, IBladderFindingPresetRepository
    {
        public BladderFindingPresetRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BladderFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != BladderDiagnosisType.None;
        protected override Expression<Func<BladderFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<BladderFindingPreset> GetByDiagnosisValue(BladderDiagnosisType diagnosis) =>
            await DataContext.Set<BladderFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);
    }
}