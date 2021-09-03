using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class SoftPartsFindingPresetRepository : PresetRepositoryBase<SoftPartsFindingPreset>, ISoftPartsFindingPresetRepository
    {
        public SoftPartsFindingPresetRepository(KneeMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftPartsFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != SoftPartsDiagnosisType.None;
        protected override Expression<Func<SoftPartsFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftPartsFindingType findingType) =>
            await DataContext.Set<SoftPartsFindingPreset>().Where(p => p.FindingType == findingType)
                .Select(DdSelectExpr).ToListAsync();

        public async Task<SoftPartsFindingPreset> GetByDiagnosisValue(SoftPartsDiagnosisType diagnosis)
        {
            return await DataContext
                    .Set<SoftPartsFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);
        }
    }
}