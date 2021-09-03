using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Repository.Repositories;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class GastrointestinalTractFindingPresetRepository : PresetRepositoryBase<GastrointestinalTractFindingPreset>, IGastrointestinalTractFindingPresetRepository
    {
        public GastrointestinalTractFindingPresetRepository(AbdomenMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<GastrointestinalTractFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosisType != GastrointestinalDifferentialDiagnosisType.None;
        protected override Expression<Func<GastrointestinalTractFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosisType.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(GastrointestinalTractFindingType findingType) =>
            await DataContext.Set<GastrointestinalTractFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<GastrointestinalTractFindingPreset> GetByDiagnosisValue(GastrointestinalDifferentialDiagnosisType diagnosis) =>
            await DataContext.Set<GastrointestinalTractFindingPreset>().FirstOrDefaultAsync(p => p.DifferentialDiagnosisType == diagnosis);
    }
}
