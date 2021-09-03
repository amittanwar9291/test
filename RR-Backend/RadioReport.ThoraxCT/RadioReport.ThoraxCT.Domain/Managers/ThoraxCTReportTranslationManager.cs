using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using RadioReport.ThoraxCT.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class ThoraxCTReportTranslationManager : ReportTranslationManager
    {
        public ThoraxCTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            // SpineLocations vertebra
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "tho_c_080213" 
                },
                EnumValues = Enum.GetNames(typeof(VertebralColumnLocalizations)).ToList(),
                FormatTranslations = CreateTranslationsWithRanges
            }); 
        }
    }
}
