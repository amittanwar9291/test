using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;

namespace RadioReport.FeetMRT.Domain.Managers
{
    public class FeetMRTReportGenerationManager: ReportGenerationManager
    {
        public FeetMRTReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
                                       IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager, IDocumentGenerator documentGenerator) 
            : base(reportSchemaRepository, reportTranslationManager, booleanExpressionManager, findingLocalizerManager, documentGenerator) { }

        public override List<MultiLocalizer> SpecialLocalizers => new List<MultiLocalizer>()
        {
            new MultiLocalizer()
            {
                LocalizerId = "anc_m_L002",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L002rm",
                        Condition = "anc_m_010104;=;Right",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Right",
                            TypeName = "Localizer"
                        },
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Medial",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%ST% %T%",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L002rl",
                        Condition = "anc_m_010104;=;Right",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Right",
                            TypeName = "Localizer"
                        },
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Lateral",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%ST% %T%",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L002ll",
                        Condition = "anc_m_010104;=;Left",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Left",
                            TypeName = "Localizer"
                        },
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Lateral",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%ST% %T%",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L002lm",
                        Condition = "anc_m_010104;=;Left",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Left",
                            TypeName = "Localizer"
                        },
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_Medial",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%ST% %T%",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            },
            new MultiLocalizer()
            {
                LocalizerId = "anc_m_L003",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L003r",
                        Condition = "anc_m_010104;=;Right"
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L003l",
                        Condition = "anc_m_010104;=;Left"
                    }
                },
            },
            new MultiLocalizer()
            {
                LocalizerId = "anc_m_L006",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L006l",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_FromLateral",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%T%",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L006m",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_FromMedial",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%T%",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "anc_m_L006p",
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "anc_m_000000",
                            TranslationKey = "LocalizerTitle_FromPlantar",
                            TypeName = "Localizer"
                        },
                        TitleFormat = "%T%",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            },
        };
    }
}
