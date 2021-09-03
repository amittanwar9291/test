using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Core.InstituteManager.Domain.Models;
using DicomMap = RadioReport.Common.Logic.Models.Import.DicomMap;

namespace RadioReport.Core.InstituteManager.Domain.Interfaces
{
    public interface ISettingsHttpManager
    {
        Task<RequestResponse> GetDicomMap(string moduleTypeString, bool includeUniversal);
        Task<RequestResponse> SetDicomMap(DicomMap dicomMap);
        Task<RequestResponse> SetDicomMaps(IEnumerable<DicomMap> dicomMaps);
        Task<RequestResponse> InitializeInstitute(InstituteConfigurationFile configurationFile);
        Task<List<ReportSessionViewModel>> GetReportSessions();
        Task RemoveReportSession(string reportId, string moduleName);
        Task RemoveAllReportSessions();
    }
}
