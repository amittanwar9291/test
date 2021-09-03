using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineCT.Domain.Enums.SoftTissues;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.Repo.Repositories
{
    public class SoftTissuesFindingPresetRepository : PresetRepositoryBase<SoftTissuesFindingPreset>, ISoftTissuesFindingPresetRepository
    {
        public SoftTissuesFindingPresetRepository(SpineCTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<SoftTissuesFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != SoftTissuesDiagnosisType.None;
        protected override Expression<Func<SoftTissuesFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissuesFindingType findingType) =>
            await DataContext.Set<SoftTissuesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<SoftTissuesFindingPreset> GetByDiagnosisValue(SoftTissuesDiagnosisType diagnosis) =>
            await DataContext.Set<SoftTissuesFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosis == diagnosis);
    }
}
