using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class MeningesFindingPresetRepository : PresetRepositoryBase<MeningesFindingPreset>, IMeningesFindingPresetRepository
    {
        public MeningesFindingPresetRepository(HeadMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<MeningesFindingPreset, bool>> DdWhereExpr => p => p.MassDifferentialDiagnosisLocalization != MeningesMassDiagnosisType.None;
        protected override Expression<Func<MeningesFindingPreset, string>> DdSelectExpr => c => c.MassDifferentialDiagnosisLocalization.ToString();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MeningesFindingType findingType) =>
            await DataContext.Set<MeningesFindingPreset>().Where(p => p.FindingType == findingType).Select(DdSelectExpr).ToListAsync();

        public async Task<MeningesFindingPreset> GetByDiagnosisValue(MeningesMassDiagnosisType diagnosis) =>
            await DataContext.Set<MeningesFindingPreset>().FirstOrDefaultAsync(p => p.MassDifferentialDiagnosisLocalization == diagnosis);
    }
}
