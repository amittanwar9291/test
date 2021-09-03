using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Enums.Bones;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class BonesFindingPresetRepository : PresetRepositoryBase<BonesFindingPreset>, IBonesFindingPresetRepository
    {
        public BonesFindingPresetRepository(NeckMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<BonesFindingPreset, bool>> DdWhereExpr => p => 
            p.MainSpatialNeoplasmDifferentialDiagnosisType1 != SpatialNeoplasmDifferentialDiagnosisType.None;
        protected override Expression<Func<BonesFindingPreset, string>> DdSelectExpr => c => 
            c.MainSpatialNeoplasmDifferentialDiagnosisType1.ToString();

        public async Task<BonesFindingPreset> GetByDiagnosisValue(SpatialNeoplasmDifferentialDiagnosisType diagnosis) => 
            await DataContext.Set<BonesFindingPreset>().FirstOrDefaultAsync(preset => preset.MainSpatialNeoplasmDifferentialDiagnosisType1 == diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await DataContext.Set<BonesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

    }
}