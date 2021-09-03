using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using RadioReport.NeckMRT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class NeckMRTReportTranslationManager : ReportTranslationManager
    {
        public NeckMRTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            // SpineLocations disc and segment (disc + vertebra up and down)
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    //segment
                    "nec_m_100306", "nec_m_100223",
                    // disc
                    "nec_m_100403", "nec_m_100308"

                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsForDiscs
            });

            // SpineLocations vertebra
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "nec_m_060213", "nec_m_100205", "nec_m_100303", "nec_m_100503", "nec_m_100336"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => !s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            });

            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "nec_m_090223"
                },
                EnumValues = Enum.GetNames(typeof(AffectedSegmentsOrVesselsLocations)).ToList(),
                FormatTranslations = CreateTranslationsForVascularValues
            });
        }
    }
}
