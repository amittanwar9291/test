using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Interfaces
{
    public interface IReportGenerationManager
    {
        Task<ReportResult> GenerateTextReport(string reportTypeName, string languageCode, LocalizerType localizerType, bool localizersBackground,
            bool isIcd10, bool isReferenceImage, IEnumerable<RadioReportValue> reportData);
        Task GenerateAndAppendTextReport(ReportResult result, string languageCode, LocalizerType localizerType, bool localizersBackground, IEnumerable<RadioReportValue> reportData);
    }
}
