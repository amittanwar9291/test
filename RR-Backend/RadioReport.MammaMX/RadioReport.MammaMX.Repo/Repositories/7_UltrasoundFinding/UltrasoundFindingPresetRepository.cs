using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Repo.Repositories
{
    public class UltrasoundFindingPresetRepository : PresetRepositoryBase<UltrasoundFindingPreset>, IUltrasoundFindingPresetRepository
    {
        public UltrasoundFindingPresetRepository(MammaMXDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<UltrasoundFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosis != MassDiagnosisType.None;
        protected override Expression<Func<UltrasoundFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosis.ToString();

        public async Task<UltrasoundFindingPreset> GetByDiagnosisValue(MassDiagnosisType diagnosis) => 
            await DataContext.Set<UltrasoundFindingPreset>().FirstOrDefaultAsync(preset => preset.DifferentialDiagnosis == diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(UltrasoundFindingType findingType) =>
            await DataContext.Set<UltrasoundFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

    }
}