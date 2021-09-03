using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class CardioMRTReportGenerationManager: ReportGenerationManager
    {
        public CardioMRTReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
                                       IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager, IDocumentGenerator documentGenerator) 
            : base(reportSchemaRepository, reportTranslationManager, booleanExpressionManager, findingLocalizerManager, documentGenerator) { }

        public override List<MultiLocalizer> SpecialLocalizers => new List<MultiLocalizer>()
        {
            new MultiLocalizer()
            {
                LocalizerId = "car_m_L002",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060415",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060415",
                            TranslationKey = "LocalizerTitle_Akinesia",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060415",
                            TranslationKey = "LocalizerTitle_KinecticDisorder",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "purple",
                        ColorHash = "#D2B2ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L002"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060416",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060416",
                            TranslationKey = "LocalizerTitle_Dyskinesia",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060416",
                            TranslationKey = "LocalizerTitle_KinecticDisorder",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "blue",
                        ColorHash = "#B2E7ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L002"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060417",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060417",
                            TranslationKey = "LocalizerTitle_Hypokinesia",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060417",
                            TranslationKey = "LocalizerTitle_KinecticDisorder",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "yellow",
                        ColorHash = "#EDEDB2",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L002"
                    }
                }
            },
            new MultiLocalizer()
            {
                LocalizerId = "car_m_L003",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060419",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060419",
                            TranslationKey = "LocalizerTitle_UnderStress",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060419",
                            TranslationKey = "LocalizerTitle_PerfusionDefects",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "purple",
                        ColorHash = "#D2B2ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L002"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060420",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060420",
                            TranslationKey = "LocalizerTitle_AtRestAndUnderStress",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060420",
                            TranslationKey = "LocalizerTitle_PerfusionDefects",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "blue",
                        ColorHash = "#B2E7ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L002"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060421",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060421",
                            TranslationKey = "LocalizerTitle_AtRest",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060421",
                            TranslationKey = "LocalizerTitle_PerfusionDefects",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "yellow",
                        ColorHash = "#EDEDB2",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L002"
                    }
                }
            },
            new MultiLocalizer()
            {
                LocalizerId = "car_m_L004",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060423",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060423",
                            TranslationKey = "LocalizerTitle_Transmural",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060423",
                            TranslationKey = "LocalizerTitle_LGESegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "purple",
                        ColorHash = "#D2B2ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060424",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060424",
                            TranslationKey = "LocalizerTitle_Subendocardinal",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060424",
                            TranslationKey = "LocalizerTitle_LGESegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "turquoise",
                        ColorHash = "#6ED1DC",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060425",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060425",
                            TranslationKey = "LocalizerTitle_Mesocardial",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060425",
                            TranslationKey = "LocalizerTitle_LGESegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "blue",
                        ColorHash = "#B2E7ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060426",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060426",
                            TranslationKey = "LocalizerTitle_Subepicardial",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060426",
                            TranslationKey = "LocalizerTitle_LGESegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "yellow",
                        ColorHash = "#EDEDB2",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    }
                }
            },
            new MultiLocalizer()
            {
                LocalizerId = "car_m_L005",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060428",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060428",
                            TranslationKey = "LocalizerTitle_Transmural",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060428",
                            TranslationKey = "LocalizerTitle_LGENonSegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "purple",
                        ColorHash = "#D2B2ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060429",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060429",
                            TranslationKey = "LocalizerTitle_Subendocardinal",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060429",
                            TranslationKey = "LocalizerTitle_LGENonSegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "turquoise",
                        ColorHash = "#6ED1DC",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060430",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060430",
                            TranslationKey = "LocalizerTitle_Mesocardial",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060430",
                            TranslationKey = "LocalizerTitle_LGENonSegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "blue",
                        ColorHash = "#B2E7ED",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060431",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060431",
                            TranslationKey = "LocalizerTitle_Subepicardial",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060431",
                            TranslationKey = "LocalizerTitle_LGENonSegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "yellow",
                        ColorHash = "#EDEDB2",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    },
                    new MultiLocalizerItem()
                    {
                        Rrid = "car_m_060432",
                        SubtitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060432",
                            TranslationKey = "LocalizerTitle_Punctiform",
                            TypeName = "Localizer"
                        },
                        TitleRRValue = new RadioReportValue()
                        {
                            RadioReportId = "car_m_060432",
                            TranslationKey = "LocalizerTitle_LGENonSegmental",
                            TypeName = "Localizer"
                        },
                        // color name and hash from ColorsEnum for CardioMRT in FE
                        ColorName = "pink",
                        ColorHash = "#EDB2B2",
                        TitleFormat = "%T% / %ST%",
                        PictureCode = "car_m_L004"
                    }
                }
            }
        };
    }
}
