using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class HeadCTReportTranslationManager : ReportTranslationManager
    {
        public HeadCTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "hea_c_040387", "hea_c_0402127", "hea_c_0603201"
                },
                EnumValues = Enum.GetNames(typeof(CortexLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithGroupedValues
            });

            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "hea_c_040553", "hea_c_0404135", "hea_c_070330"
                },
                EnumValues = Enum.GetNames(typeof(BasalGangliaLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithGroupedValues
            });

            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "hea_c_040242"
                },
                EnumValues = Enum.GetNames(typeof(AffectedSegmentsOrVesselsLocations)).ToList(),
                FormatTranslations = CreateTranslationsForVascularValues
            });
        }
    }
}
