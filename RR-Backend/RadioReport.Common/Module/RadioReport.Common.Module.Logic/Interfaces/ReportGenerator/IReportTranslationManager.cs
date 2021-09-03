using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Interfaces.ReportGenerator
{
    public interface IReportTranslationManager
    {
        string GetValueTranslation(RadioReportValue valueToTranslate, string languageCode);
        string GetTextTranslation(string textToTranslate, string rrid, string languageCode);
    }
}
