using Microsoft.Extensions.Localization;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations
{
    public delegate string FormatTranslations(RadioReportValue valueToTranslate, IStringLocalizer localizer,
        List<(string value, string key)> selectedEnum, List<string> enumValues);

    public class TranslationFormatting
    {
        public IEnumerable<string> RrIds { get; set; }
        public IEnumerable<string> EnumValues { get; set; }
        public FormatTranslations FormatTranslations { get; set; }
    }
}
