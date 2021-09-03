using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class BasalNucleiFindingPresetRepository : PresetRepositoryBase<BasalNucleiFindingPreset>, IBasalNucleiFindingPresetRepository
    {
        public BasalNucleiFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BasalNucleiFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosisLocalizationType != BasalNucleiDiagnosisType.None;
        protected override Expression<Func<BasalNucleiFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosisLocalizationType.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BasalNucleiFindingType findingType) =>
            await DataContext.Set<BasalNucleiFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<BasalNucleiFindingPreset> GetByDiagnosisValue(BasalNucleiDiagnosisType diagnosis) =>
            await DataContext.Set<BasalNucleiFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosisLocalizationType == diagnosis);
    }
}
