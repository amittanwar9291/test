using Microsoft.Extensions.Localization;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Translations;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class AngiographyMRTReportTranslationManager : ReportTranslationManager
    {
        public AngiographyMRTReportTranslationManager(IStringLocalizerFactory stringLocalizerFactory) : base(stringLocalizerFactory)
        {
            CustomTranslationFormattings.Add(new TranslationFormatting()
            {
                RrIds = new List<string>
                {
                    "ang_m_0402102"
                },
                EnumValues = Enum.GetNames(typeof(AffectedSegmentsOrVesselsLocations)).ToList(),
                FormatTranslations = CreateTranslationsForVascularValues
            });
        }
    }
}
