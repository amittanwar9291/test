using RadioReport.Common.Module.Logic.Interfaces.ReportGenerator;
using RadioReport.Common.Module.Logic.Managers.ReportGenerator;
using RadioReport.Common.Module.Logic.Models.ReportGenerator.Localizers;
using System.Collections.Generic;

namespace RadioReport.HandMRT.Domain.Managers
{
    public class HandMRTReportGenerationManager: ReportGenerationManager
    {
        public HandMRTReportGenerationManager(IReportSchemaRepository reportSchemaRepository, IReportTranslationManager reportTranslationManager,
                                       IBooleanExpressionManager booleanExpressionManager, IFindingLocalizerManager findingLocalizerManager, IDocumentGenerator documentGenerator) 
            : base(reportSchemaRepository, reportTranslationManager, booleanExpressionManager, findingLocalizerManager, documentGenerator) { }

        public override List<MultiLocalizer> SpecialLocalizers => new List<MultiLocalizer>()
        {
            new MultiLocalizer()
            {
                LocalizerId = "han_m_L002",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "han_m_L002r",
                        Condition = "han_m_010105;=;Right",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "han_m_L002l",
                        Condition = "han_m_010105;=;Left",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            },
            new MultiLocalizer()
            {
                LocalizerId = "han_m_L003",
                Items = new List<MultiLocalizerItem>()
                {
                    new MultiLocalizerItem()
                    {
                        PictureCode = "han_m_L003r",
                        Condition = "han_m_010105;=;Right",
                        Style = "style =\"margin-right: 10px;\""
                    },
                    new MultiLocalizerItem()
                    {
                        PictureCode = "han_m_L003l",
                        Condition = "han_m_010105;=;Left",
                        Style = "style =\"margin-right: 10px;\""
                    }
                },
            }
        };
    }
}
