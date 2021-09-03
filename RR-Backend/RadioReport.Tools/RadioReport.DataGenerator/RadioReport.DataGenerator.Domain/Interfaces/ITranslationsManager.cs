using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.DataGenerator.Domain.Interfaces
{
    public interface ITranslationsManager
    {
        bool CheckValueTranslation(RadioReportValue valueToTranslate, string languageCode);
    }
}
