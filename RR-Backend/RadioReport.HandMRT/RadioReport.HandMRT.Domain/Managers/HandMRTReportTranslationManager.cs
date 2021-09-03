using Microsoft.Extensions.Localization;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using RadioReport.HandMRT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.HandMRT.Domain.Managers
{
    public class HandMRTReportTranslationManager : ReportTranslationManager
    {
        private static readonly List<string> JointCategories = new List<string>
        {
            nameof(HandJointLocations.DipJoints),
            nameof(HandJointLocations.PipJoints),
            nameof(HandJointLocations.McpJoints),
            nameof(HandJointLocations.CmcJoints)
        };

        public HandMRTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "han_m_040219", "han_m_040245", "han_m_080203"
                },
                EnumValues = Enum.GetNames(typeof(HandJointLocations)).ToList(),
                FormatTranslations = CreateTranslationsForJoints
            });
        }

        private string CreateTranslationsForJoints(RadioReportValue valueToTranslate, IStringLocalizer localizer,
            List<(string value, string key)> selectedEnum, List<string> enumValues)
        {
            if (selectedEnum is null | !selectedEnum.Any() || enumValues is null)
            {
                return string.Empty;
            }

            foreach (var category in JointCategories)
            {
                if (selectedEnum.Any(e => e.value == category))
                {
                    var categoryName = category.Substring(0, category.IndexOf("Joints", StringComparison.Ordinal));
                    selectedEnum.RemoveAll(e => e.value != category && e.value.StartsWith(categoryName, StringComparison.Ordinal));
                }
            }

            return string.Join(", ", selectedEnum.Select(e => GetValueFromModuleOrGeneralResource(localizer, e.key.Trim(), valueToTranslate.AlternativeTranslationSuffix)));
        }
    }
}
