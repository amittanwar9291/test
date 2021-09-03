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
    public class LungInterstitiumFindingPresetRepository : PresetRepositoryBase<LungInterstitiumFindingPreset>, ILungInterstitiumFindingPresetRepository
    {
        public LungInterstitiumFindingPresetRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<LungInterstitiumFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != LungInterstitiumDiagnosisType.None;
        protected override Expression<Func<LungInterstitiumFindingPreset, string>> DdSelectExpr => p => p.DifferentialDiagnosis.ToString();

        public override async Task<IEnumerable<string>> GetAllAvailableDiagnosis() =>
            await DataContext.Set<LungInterstitiumFindingPreset>().Where(DdWhereExpr).Select(DdSelectExpr).Distinct().ToListAsync();

        public async Task<IEnumerable<LungInterstitiumFindingPreset>> GetByDiagnosisValue(LungInterstitiumDiagnosisType diagnosis) =>
            await DataContext.Set<LungInterstitiumFindingPreset>().Where(preset => preset.DifferentialDiagnosis == diagnosis).ToListAsync();
    }
}