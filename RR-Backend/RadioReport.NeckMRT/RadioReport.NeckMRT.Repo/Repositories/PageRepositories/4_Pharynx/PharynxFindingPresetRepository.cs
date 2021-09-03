using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class PharynxFindingPresetRepository : PresetRepositoryBase<PharynxFindingPreset>, IPharynxFindingPresetRepository
    {
        public PharynxFindingPresetRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<PharynxFindingPreset, bool>> DdWhereExpr => p => 
            p.DifferentialDiagnosis != DifferentialDiagnosisType.None;
        protected override Expression<Func<PharynxFindingPreset, string>> DdSelectExpr => c => 
            c.DifferentialDiagnosis.ToString();

        public async Task<PharynxFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis) => 
            await DataContext.Set<PharynxFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(PharynxFindingType findingType) =>
            await DataContext.Set<PharynxFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

    }
}