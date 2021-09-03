using System.Collections.Generic;
using System.Linq;
using RadioReport.CardioMRT.Domain.Enums.PericardiumVessels;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.CardioMRT.Domain.Services
{
    public class CardioMRTReportPageService : ReportPageService
    {
        protected override List<CustomSuggestion> CustomSuggestions { get; } = new List<CustomSuggestion>
        {
            new CustomSuggestion()
            {
                RrIds = { "car_m_090377" },
                EnumValues = 
                {
                    LocalizationDetailsType.None.ToString(),
                    LocalizationDetailsType.C1.ToString(),
                    LocalizationDetailsType.C2.ToString(),
                    LocalizationDetailsType.C3.ToString(),
                    LocalizationDetailsType.C4.ToString(),
                    LocalizationDetailsType.C5.ToString(),
                    LocalizationDetailsType.C6.ToString(),
                    LocalizationDetailsType.C7.ToString(),
                    LocalizationDetailsType.C8.ToString(),
                    LocalizationDetailsType.C9.ToString(),
                    LocalizationDetailsType.C10.ToString(),
                    LocalizationDetailsType.C11.ToString(),
                    LocalizationDetailsType.C12.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds = { "car_m_090378" },
                EnumValues =
                {
                    LocalizationDetailsType.None.ToString(),
                    LocalizationDetailsType.TVB1.ToString(),
                    LocalizationDetailsType.TVB2.ToString(),
                    LocalizationDetailsType.TVB3.ToString(),
                    LocalizationDetailsType.TVB4.ToString(),
                    LocalizationDetailsType.TVB5.ToString(),
                    LocalizationDetailsType.TVB6.ToString(),
                    LocalizationDetailsType.TVB7.ToString(),
                    LocalizationDetailsType.TVB8.ToString(),
                    LocalizationDetailsType.TVB9.ToString(),
                    LocalizationDetailsType.TVB10.ToString(),
                    LocalizationDetailsType.TVB11.ToString(),
                    LocalizationDetailsType.TVB12.ToString()
                }
            }
        };

        public CardioMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtAreaOfExamination, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtFlaps, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtFindingsVentricles, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtLeftVentricle, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtRightVentricle, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtSpatialRequirement, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtPericardiumVessels, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtSummary, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 11 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtAreaOfExamination, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CardioMrtFindingsVentricles, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Cardio MRT module");
            }

            return result;
        }
    }
}