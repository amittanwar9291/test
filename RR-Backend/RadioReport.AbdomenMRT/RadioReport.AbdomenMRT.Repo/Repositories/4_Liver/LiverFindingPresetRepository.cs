using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class LiverFindingPresetRepository : PresetRepositoryBase<LiverFindingPreset>, ILiverFindingPresetRepository
    {
        public LiverFindingPresetRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<LiverFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != LiverDifferentialDiagnosisType.None;
        protected override Expression<Func<LiverFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(LiverFindingType findingType) =>
            await DataContext.Set<LiverFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<LiverFindingPreset> GetByDiagnosisValue(LiverDifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<LiverFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosis == diagnosis);
    }
}
