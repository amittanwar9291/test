using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Interfaces
{
    public interface IMediastinumFindingPresetRepository : IRepository<MediastinumFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(MediastinumFindingType findingType);

        Task<MediastinumFindingPreset> GetByDiagnosisValue(MediastinumDiagnosisType diagnosis);
    }
}