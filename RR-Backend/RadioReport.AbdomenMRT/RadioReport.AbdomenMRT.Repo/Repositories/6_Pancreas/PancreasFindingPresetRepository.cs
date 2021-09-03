using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class PancreasFindingPresetRepository : PresetRepositoryBase<PancreasFindingPreset>, IPancreasFindingPresetRepository
    {
        public PancreasFindingPresetRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<PancreasFindingPreset, bool>> DdWhereExpr => p => p.MainMassDifferentialDiagnosisType1 != MassDifferentialDiagnosisType.None;
        protected override Expression<Func<PancreasFindingPreset, string>> DdSelectExpr => c => c.MainMassDifferentialDiagnosisType1.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(PancreasFindingType findingType) =>
            await DataContext.Set<PancreasFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<PancreasFindingPreset> GetByDiagnosisValue(MassDifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<PancreasFindingPreset>().FirstOrDefaultAsync(p => p.MainMassDifferentialDiagnosisType1 == diagnosis);
    }
}
