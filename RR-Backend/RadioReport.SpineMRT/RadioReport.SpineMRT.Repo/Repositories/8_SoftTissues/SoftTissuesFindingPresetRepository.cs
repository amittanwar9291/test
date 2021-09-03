using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class SoftTissuesFindingPresetRepository : PresetRepositoryBase<SoftTissuesFindingPreset>, ISoftTissuesFindingPresetRepository
    {
        public SoftTissuesFindingPresetRepository(SpineMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftTissuesFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != SoftTissuesDiagnosisType.None;
        protected override Expression<Func<SoftTissuesFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<SoftTissuesFindingPreset> GetByDiagnosisValue(SoftTissuesDiagnosisType diagnosis)
        {
            return await DataContext
                .Set<SoftTissuesFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissuesFindingType findingType)
        {
            return await DataContext.Set<SoftTissuesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();
        }
    }
}
