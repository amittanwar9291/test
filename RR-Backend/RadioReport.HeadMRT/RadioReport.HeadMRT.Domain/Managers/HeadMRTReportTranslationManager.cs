using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class HeadMRTReportTranslationManager : ReportTranslationManager
    {
        public HeadMRTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "hea_m_040387", "hea_m_0603201"
                },
                EnumValues = Enum.GetNames(typeof(CortexLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithGroupedValues
            });

            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "hea_m_040553", "hea_m_070330"
                },
                EnumValues = Enum.GetNames(typeof(BasalGangliaLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithGroupedValues
            });

            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "hea_m_040231", "hea_m_040354"
                },
                EnumValues = Enum.GetNames(typeof(AffectedSegmentsOrVesselsLocations)).ToList(),
                FormatTranslations = CreateTranslationsForVascularValues
            });
        }
    }
}
