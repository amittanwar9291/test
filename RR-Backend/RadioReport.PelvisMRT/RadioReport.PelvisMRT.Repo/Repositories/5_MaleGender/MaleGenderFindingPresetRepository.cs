using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.PelvisMRT.Domain.Enums.MaleGender;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Repositories
{
    public class MaleGenderFindingPresetRepository : PresetRepositoryBase<MaleGenderFindingPreset>, IMaleGenderFindingPresetRepository
    {
        public MaleGenderFindingPresetRepository(PelvisMRTDbContext dbContext) : base(dbContext)
        {
        }

        protected override Expression<Func<MaleGenderFindingPreset, bool>> DdWhereExpr => p => p.DifferentialDiagnosisType != MaleGenderDiagnosisType.None;
        protected override Expression<Func<MaleGenderFindingPreset, string>> DdSelectExpr => c => c.DifferentialDiagnosisType.ToString();

        public async Task<MaleGenderFindingPreset> GetByDiagnosisValue(MaleGenderFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            var preset = DataContext.Set<MaleGenderFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != MaleGenderFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            if (diagnosisParams.DifferentialDiagnosisType != MaleGenderDiagnosisType.None)
            {
                preset = preset.Where(p => p.DifferentialDiagnosisType == diagnosisParams.DifferentialDiagnosisType);
            }

            return await preset.FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MaleGenderFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));
            
            var preset = DataContext.Set<MaleGenderFindingPreset>().AsQueryable();

            if (diagnosisParams.FindingType != MaleGenderFindingType.None)
            {
                preset = preset.Where(p => p.FindingType == diagnosisParams.FindingType);
            }

            return await preset.Select(DdSelectExpr).ToListAsync();
        }
    }
}