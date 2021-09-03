using System;

namespace RadioReport.Common.Logic.Attributes
{
    /// <summary>
    /// Custom attribute allows set identifier that will allow to identify value through whole radio report system
    /// </summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field,
        AllowMultiple = true)]
    public class RadioReportIdAttribute : Attribute
    {
        /// <summary>
        /// Custom identifier in radio report system
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Name of instance (occurrence). It is use in case that one field/property of object is use in more then one place.
        /// It allow handling of nested objects (fields) be separating "levels" via dots (Similar way like EF is handling nested includes)
        /// It is optional.
        /// </summary>
        public string InstanceName { get; set; }

        /// <summary>
        /// It "cover" "real" value of assign to a field for the report generation engine.
        /// It is optional.
        /// </summary>
        public object Value { get; set; }

        /// <summary>
        /// It indicate if field should be "visible"/"exportable" in for the report generation engine.
        /// It is optional. Default value is true.
        /// </summary>
        public bool IsExportable { get; set; } = true;

        /// <summary>
        /// It indicates if the translation manager should try and use alternative translation instead of calculated one.
        /// If not found manager will use default, calculated one.
        /// Optional
        /// </summary>
        public string AlternativeTranslationSuffix { get; set; }

        /// <summary>
        /// Allows for creating condition, whether rrid should be exported
        /// Requires implementation of IIdConditionEvaluator in model or in model containing in case of enum
        /// </summary>
        public string CustomConditionName { get; set; }

        /// <summary>
        /// Number of decimal places to be displayed in report.
        /// </summary>
        public int DecimalPlaces { get; set; } = -1;

        /// <summary>
        /// Condtructor
        /// </summary>
        /// <param name="id">Custom identifier in radio report system</param>
        public RadioReportIdAttribute(string id)
        {
            Id = id;
        }
    }
}
