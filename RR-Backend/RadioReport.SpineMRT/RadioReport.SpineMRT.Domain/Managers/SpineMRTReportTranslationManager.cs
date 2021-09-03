using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using RadioReport.SpineMRT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.SpineMRT.Domain.Managers
{
    public class SpineMRTReportTranslationManager : ReportTranslationManager
    {
        public SpineMRTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            // SpineLocations all (vertebra + disc)
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "spi_m_010104", "spi_m_020203"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            });

            // SpineLocations disc and segment (disc + vertebra up and down)
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    //segment
                    "spi_m_040209", "spi_m_040308", "spi_m_040408",
                    "spi_m_040212", "spi_m_050205", "spi_m_050209",
                    // disc
                    "spi_m_020207", "spi_m_050203"

                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsForDiscs
            });

            // SpineLocations vertebra
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "spi_m_060204", "spi_m_020204", "spi_m_0603100", "spi_m_0604201", "spi_m_060368",
                    "spi_m_060237", "spi_m_070203", "spi_m_070312", "spi_m_070434", "spi_m_070320",
                    "spi_m_080204", "spi_m_080412"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => !s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            }); 
        }
    }
}
