using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers
{
    public class MultiLocalizerItem
    {
        /// <summary>
        /// Rrid should match field rrid. 
        /// This item will be appended to report only for field with the same rrid.
        /// </summary>
        public string Rrid { get; set; }
        /// <summary>
        /// RadioReportValue is needed for translations.
        /// TranslationKey should be filled with LocalizerTitle_{field type id}.
        /// RadioReportId should have RrId with correct module prefix.
        /// TypeName cannot be null.
        /// </summary>
        public RadioReportValue TitleRRValue { get; set; }
        /// <summary>
        /// RadioReportValue is needed for translations.
        /// TranslationKey should be filled with LocalizerTitle_{field type id}.
        /// RadioReportId should have RrId with correct module prefix.
        /// </summary>
        public RadioReportValue SubtitleRRValue { get; set; }
        /// <summary>
        /// Color name should be unique for the same color hash across all localizers in module.
        /// If multiple localizers with the same color name and different color hashes will appear
        /// on the same report then colors will be overriden.
        /// TypeName cannot be null.
        /// </summary>
        public string ColorName { get; set; }
        public string ColorHash { get; set; }
        /// <summary>
        /// In order to place text in title use: %T% for title and %ST% for subtitle.
        /// </summary>
        public string TitleFormat { get; set; }
        /// <summary>
        /// Postfix condition - same as report lines (findings not available however).
        /// If null then condition is not evaluated.
        /// </summary>
        public string Condition { get; set; }
        public string PictureCode { get; set; }
        public string Style { get; set; }
    }
}
