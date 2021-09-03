using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HipMRT.Repo.Repositories
{
    public class CapsuleAndLigamentsFindingPresetRepository : PresetRepositoryBase<CapsuleAndLigamentsFindingPreset>, ICapsuleAndLigamentsFindingPresetRepository
    {
        public CapsuleAndLigamentsFindingPresetRepository(HipMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<CapsuleAndLigamentsFindingPreset, bool>> DdWhereExpr => p => p.SynoviaDifferentialDiagnosis != SynoviaDifferentialDiagnosis.None;
        protected override Expression<Func<CapsuleAndLigamentsFindingPreset, string>> DdSelectExpr => c => c.SynoviaDifferentialDiagnosis.ToString();

        public async Task<CapsuleAndLigamentsFindingPreset> GetByDiagnosisValue(SynoviaDifferentialDiagnosis diagnosis)
        {
            return await DataContext
                    .Set<CapsuleAndLigamentsFindingPreset>().FirstOrDefaultAsync(preset => preset.SynoviaDifferentialDiagnosis == diagnosis);
        }
    }
}