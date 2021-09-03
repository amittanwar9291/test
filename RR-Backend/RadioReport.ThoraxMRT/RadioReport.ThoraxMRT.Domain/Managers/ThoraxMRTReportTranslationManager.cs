using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using RadioReport.ThoraxMRT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.ThoraxMRT.Domain.Managers
{
    public class ThoraxMRTReportTranslationManager : ReportTranslationManager
    {
        public ThoraxMRTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            // SpineLocations vertebra
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "tho_m_070226"
                },
                EnumValues = Enum.GetNames(typeof(SpineLocations)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            }); 
        }
    }
}
