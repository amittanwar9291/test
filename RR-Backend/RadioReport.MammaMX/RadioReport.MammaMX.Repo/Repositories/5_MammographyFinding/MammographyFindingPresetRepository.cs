using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class MammographyFindingPresetRepository : PresetRepositoryBase<MammographyFindingPreset>, IMammographyFindingPresetRepository
    {
        public MammographyFindingPresetRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<MammographyFindingPreset, bool>> DdWhereExpr => p => p.MassKnownDiagnosisType != DiagnosisType.None;
        protected override Expression<Func<MammographyFindingPreset, string>> DdSelectExpr => c => c.MassKnownDiagnosisType.ToString();

        public async Task<MammographyFindingPreset> GetByDiagnosisValue(DiagnosisType diagnosis) =>
            await DataContext.Set<MammographyFindingPreset>().FirstOrDefaultAsync(preset => preset.MassKnownDiagnosisType == diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MammographyFindingType findingType) =>
            await DataContext.Set<MammographyFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

    }
}