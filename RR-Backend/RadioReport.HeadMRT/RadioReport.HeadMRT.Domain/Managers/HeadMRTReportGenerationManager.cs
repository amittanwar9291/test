using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class HeadMRTReportGenerationManager : ReportGenerationManager
    {
        public HeadMRTReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
                                       IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager, IDocumentGenerator documentGenerator)
            : base(reportSchemaRepository, reportTranslationManager, booleanExpressionManager, findingLocalizerManager, documentGenerator) { }

        public override List<MultiLocalizer> SpecialLocalizers => new List<MultiLocalizer>()
        {
            new MultiLocalizer()
            {
                LocalizerId = "hea_m_L003",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L003e",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {                       
                        PictureCode = "hea_m_L003c",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {                      
                        PictureCode = "hea_m_L003d",
                        Style = "style =\"margin-right: 10px;\""
                    },                   
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L003b",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L003a",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            },
            new MultiLocalizer()
            {
                LocalizerId = "hea_m_L004",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L004a",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L004b",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            },
            new MultiLocalizer()
            {
                LocalizerId = "hea_m_L005",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L005c",
                        Style = "style =\"margin-right: 10px;\""
                    },                  
                    new MultiLocalizerItem()
                    {                      
                        PictureCode = "hea_m_L005b",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "hea_m_L005a",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            }
        };
    }
}
