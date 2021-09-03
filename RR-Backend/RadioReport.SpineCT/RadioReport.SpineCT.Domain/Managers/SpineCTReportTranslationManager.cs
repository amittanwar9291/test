using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using RadioReport.SpineCT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.SpineCT.Domain.Managers
{
    public class SpineCTReportTranslationManager : ReportTranslationManager
    {
        public SpineCTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            // SpineLocations all (vertebra + disc)
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "spi_c_010104"
                    
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            });

            // SpineLocations disc and segment (disc + vertebra up and down)
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    // disc
                    "spi_c_020415",
                    "spi_c_050203",
                    "spi_c_0603210",

                    // segment
                    "spi_c_040209", "spi_c_040308", "spi_c_040408", "spi_c_040212",
                    "spi_c_050205",
                    "spi_c_070203"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsForDiscs
            });

            // SpineLocations vertebra
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "spi_c_020222", "spi_c_020403", "spi_c_020409",
                    "spi_c_0403202", "spi_c_0404202", "spi_c_0405202",
                    "spi_c_0602202", "spi_c_060203", "spi_c_0603204", "spi_c_0603208",
                    "spi_c_070208", "spi_c_070442",
                    "spi_c_080204", "spi_c_0803325"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).Where(s => !s.EndsWith("d", StringComparison.Ordinal)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            }); 
        }
    }
}
