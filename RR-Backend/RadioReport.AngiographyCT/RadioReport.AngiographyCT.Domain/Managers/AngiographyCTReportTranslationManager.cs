using Microsoft.Extensions.Localization;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class AngiographyCTReportTranslationManager : ReportTranslationManager
    {
        public AngiographyCTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            // SpineLocations vertebra
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "ang_c_100438", "ang_c_100451", "ang_c_100461"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => !s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            });

            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "ang_c_050247"
                },
                EnumValues = Enum.GetNames(typeof(AffectedSegmentsOrVesselsLocations)).ToList(),
                FormatTranslations = CreateTranslationsForVascularValues
            });
        }
    }
}
