using Newtonsoft.Json.Linq;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Core.ExportInterface.Domain.Interfaces
{
    public interface IExportService
    {
        JObject FormatExport(ExportFormatType exportFormatType, string reportHtml, string languageCode);
    }
}
