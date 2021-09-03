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
    public class MediastinumFindingPresetRepository : PresetRepositoryBase<MediastinumFindingPreset>, IMediastinumFindingPresetRepository
    {
        public MediastinumFindingPresetRepository(ThoraxCTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<MediastinumFindingPreset, bool>> DdWhereExpr => p => p.MainCharacteristicsDifferentialDiagnosis01 != MediastinumDiagnosisType.None;
        protected override Expression<Func<MediastinumFindingPreset, string>> DdSelectExpr => p => p.MainCharacteristicsDifferentialDiagnosis01.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MediastinumFindingType findingType) =>
            await DataContext.Set<MediastinumFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<MediastinumFindingPreset> GetByDiagnosisValue(MediastinumDiagnosisType diagnosis) =>
            await DataContext.Set<MediastinumFindingPreset>().FirstOrDefaultAsync(preset => preset.MainCharacteristicsDifferentialDiagnosis01 == diagnosis);
    }
}