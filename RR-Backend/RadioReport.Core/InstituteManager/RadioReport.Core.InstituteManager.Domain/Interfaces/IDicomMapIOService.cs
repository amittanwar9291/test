using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;

namespace RadioReport.Core.InstituteManager.Domain.Interfaces
{
    public interface IDicomMapIOService
    {
        Task<RequestResponse> SetDicomMap(DicomMap dicomMap);
        Task<RequestResponse> SetDicomMaps(IEnumerable<DicomMap> dicomMaps);
        Task<RequestResponse> GetDicomMap(string moduleTypeString, bool includeUniversal = true);
    }
}
