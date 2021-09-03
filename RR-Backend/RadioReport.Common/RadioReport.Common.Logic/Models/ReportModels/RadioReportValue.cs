using System;
using System.Diagnostics;
using System.Globalization;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    /// <summary>
    /// POCO class for keeping single value of radio report system for specified radioReportId
    /// </summary>
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class RadioReportValue
    {
        /// <summary>
        /// Identifier of value in whole radio report system
        /// </summary>
        public string RadioReportId { get; set; }

        /// <summary>
        /// Single value inside of radio report system
        /// </summary>
        public object Value { get; set; }

        public string TypeName { get; set; }

        /// <summary>
        /// Used to get translation for all fields in report generation (both for localizer and text fields)
        /// </summary>
        public string TranslationKey { get; set; }
        
        /// <summary>
        /// Used in localizer generation to remove alternative suffix before mapping values to picutre
        /// </summary>
        public string AlternativeTranslationSuffix { get; set; }

        public string CollectionItemType { get; set; }

        /// <summary>
        /// Number of decimal places to be displayed in report.
        /// </summary>
        public int DecimalPlaces { get; set; } = -1;

        public string ValueAsString(CultureInfo culture = null)
        {
            culture ??= new CultureInfo("en-GB");

            if (Value is decimal decimalValue)
            {
                return DecimalPlaces >= 0 ? decimal.Round(decimalValue, DecimalPlaces).ToString(culture) : decimalValue.ToString("0.###", culture);
            }

            if (Value is DateTime dateValue)
            {
                return dateValue.ToShortDateString();
            }

            return Value?.ToString();
        }

#if DEBUG
        private string DebuggerDisplay { get => string.Join(" | ", RadioReportId, Value.ToString(), CollectionItemType, TypeName, TranslationKey); }
#endif
    }
}
