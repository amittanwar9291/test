using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class LabrumAndRibbonsFindingPresetRepository : PresetRepositoryBase<LabrumAndRibbonsFindingPreset>, ILabrumAndRibbonsFindingPresetRepository, IPresetBaseRepository
    {
        public LabrumAndRibbonsFindingPresetRepository(ShoulderMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<LabrumAndRibbonsFindingPreset, bool>> DdWhereExpr => p => p.ExtensionLabrumPathologyDiagnosis1 != DiagnosisType.None;

        protected override Expression<Func<LabrumAndRibbonsFindingPreset, string>> DdSelectExpr => c => c.ExtensionLabrumPathologyDiagnosis1.ToString();

        public async Task<LabrumAndRibbonsFindingPreset> GetByDiagnosisValue(DiagnosisType diagnosis)
        {
            return await DataContext
                    .Set<LabrumAndRibbonsFindingPreset>().FirstOrDefaultAsync(preset => preset.ExtensionLabrumPathologyDiagnosis1 == diagnosis);
        }
    }
}
