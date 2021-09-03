using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class KidneysFindingPresetRepository : PresetRepositoryBase<KidneysFindingPreset>, IKidneysFindingPresetRepository
    {
        public KidneysFindingPresetRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<KidneysFindingPreset, bool>> DdWhereExpr => p => p.KidneysDifferentialDiagnosisType != KidneysDifferentialDiagnosisType.None;
        protected override Expression<Func<KidneysFindingPreset, string>> DdSelectExpr => c => c.KidneysDifferentialDiagnosisType.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(KidneysFindingType findingType) =>
            await DataContext.Set<KidneysFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<KidneysFindingPreset> GetByDiagnosisValue(KidneysDifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<KidneysFindingPreset>().FirstOrDefaultAsync(p => p.KidneysDifferentialDiagnosisType == diagnosis);
    }
}
