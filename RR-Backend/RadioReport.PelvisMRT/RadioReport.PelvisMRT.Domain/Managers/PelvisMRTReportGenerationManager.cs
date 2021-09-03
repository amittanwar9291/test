using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Domain.Managers
{
    public class PelvisMRTReportGenerationManager: ReportGenerationManager
    {
        public PelvisMRTReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
                                       IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager, IDocumentGenerator documentGenerator) 
            : base(reportSchemaRepository, reportTranslationManager, booleanExpressionManager, findingLocalizerManager, documentGenerator) { }

        public override List<MultiLocalizer> SpecialLocalizers => new List<MultiLocalizer>()
        {
            new MultiLocalizer()
            {
                LocalizerId = "pel_m_L001",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "pel_m_000000",
                            TranslationKey = "LocalizerTitle_BaseGland",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%T%",
                        PictureCode = "pel_m_L001a",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "pel_m_000000",
                            TranslationKey = "LocalizerTitle_MiddleGland",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%T%",
                        PictureCode = "pel_m_L001b",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "pel_m_000000",
                            TranslationKey = "LocalizerTitle_ApexGland",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%T%",
                        PictureCode = "pel_m_L001c",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            }
        };
    }
}
