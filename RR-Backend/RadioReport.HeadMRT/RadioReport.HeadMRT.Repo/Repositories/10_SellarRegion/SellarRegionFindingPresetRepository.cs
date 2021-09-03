using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class SellarRegionFindingPresetRepository : PresetRepositoryBase<SellarRegionFindingPreset>, ISellarRegionFindingPresetRepository
    {
        public SellarRegionFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SellarRegionFindingPreset, bool>> DdWhereExpr => p => p.SellarRegionDiagnosisLocalizationType != SellarRegionDiagnosisType.None;
        protected override Expression<Func<SellarRegionFindingPreset, string>> DdSelectExpr => p => p.SellarRegionDiagnosisLocalizationType.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SellarRegionFindingType findingType) =>
            await DataContext.Set<SellarRegionFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SellarRegionFindingPreset> GetByDiagnosisValue(SellarRegionDiagnosisType diagnosis) =>
            await DataContext.Set<SellarRegionFindingPreset>().FirstOrDefaultAsync(preset => preset.SellarRegionDiagnosisLocalizationType == diagnosis);
    }
}