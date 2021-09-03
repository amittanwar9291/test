using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class SoftTissueFindingPresetRepository : PresetRepositoryBase<SoftTissueFindingPreset>, ISoftTissueFindingPresetRepository
    {
        public SoftTissueFindingPresetRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftTissueFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != DifferentialDiagnosisType.None;
        protected override Expression<Func<SoftTissueFindingPreset, string>> DdSelectExpr => p => p.DifferentialDiagnosis.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType) =>
            await DataContext.Set<SoftTissueFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SoftTissueFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<SoftTissueFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosis == diagnosis);
    }
}