using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Enums.Larynx;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class LarynxFindingPresetRepository : PresetRepositoryBase<LarynxFindingPreset>, ILarynxFindingPresetRepository
    {
        public LarynxFindingPresetRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<LarynxFindingPreset, bool>> DdWhereExpr => p => 
            p.DifferentialDiagnosis != DifferentialDiagnosisType.None;
        protected override Expression<Func<LarynxFindingPreset, string>> DdSelectExpr => c => 
            c.DifferentialDiagnosis.ToString();

        public async Task<LarynxFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis) => 
            await DataContext.Set<LarynxFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(LarynxFindingType findingType) =>
            await DataContext.Set<LarynxFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

    }
}