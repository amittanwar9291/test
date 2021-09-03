﻿using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.KneeMRT.Domain.Enums.Bones;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Interfaces
{
    public interface IBonesFindingPresetRepository : IRepository<BonesFindingPreset>, IPresetBaseRepository
    {
        Task<BonesFindingPreset> GetByDiagnosisValue(BonesDiagnosisType diagnosis);
    }
}