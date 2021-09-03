using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Repositories
{
    public class SoftTissueFindingPresetRepository : PresetRepositoryBase<SoftTissueFindingPreset>, ISoftTissueFindingPresetRepository
    {
        public SoftTissueFindingPresetRepository(HandMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftTissueFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != DifferentialDiagnosisType.None;
        protected override Expression<Func<SoftTissueFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType) =>
            await DataContext.Set<SoftTissueFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SoftTissueFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<SoftTissueFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosis == diagnosis);
    }
}
