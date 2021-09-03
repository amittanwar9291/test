using System.Collections.Generic;
using System.Linq;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Services
{
    public class MammaMRTReportPageService : ReportPageService
    {
        protected override List<CustomSuggestion> CustomSuggestions { get; } = new List<CustomSuggestion>
        {
            new CustomSuggestion()
            {
                RrIds = { "mam_m_060205" },
                EnumValues =
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.RightTopOuter.ToString(),
                    BreastLocations.RightTopInner.ToString(),
                    BreastLocations.LeftTopOuter.ToString(),
                    BreastLocations.LeftTopInner.ToString(),
                    BreastLocations.RightBottomInner.ToString(),
                    BreastLocations.RightBottomOuter.ToString(),
                    BreastLocations.LeftBottomInner.ToString(),
                    BreastLocations.LeftBottomOuter.ToString(),
                    BreastLocations.RightTop.ToString(),
                    BreastLocations.RightBottom.ToString(),
                    BreastLocations.OuterRight.ToString(),
                    BreastLocations.InnerRight.ToString(),
                    BreastLocations.LeftTop.ToString(),
                    BreastLocations.LeftBottom.ToString(),
                    BreastLocations.InnerLeft.ToString(),
                    BreastLocations.OuterLeft.ToString(),
                    BreastLocations.RightRing.ToString(),
                    BreastLocations.RightMiddle.ToString(),
                    BreastLocations.LeftRing.ToString(),
                    BreastLocations.LeftMiddle.ToString(),
                    BreastLocations.RightShoulder.ToString(),
                    BreastLocations.LeftShoulder.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds = { "mam_m_050206-1", "mam_m_050206-2" },
                EnumValues =
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.RightTopOuter.ToString(),
                    BreastLocations.RightTopInner.ToString(),
                    BreastLocations.LeftTopOuter.ToString(),
                    BreastLocations.LeftTopInner.ToString(),
                    BreastLocations.RightBottomInner.ToString(),
                    BreastLocations.RightBottomOuter.ToString(),
                    BreastLocations.LeftBottomOuter.ToString(),
                    BreastLocations.LeftBottomInner.ToString(),
                    BreastLocations.RightRing.ToString(),
                    BreastLocations.RightMiddle.ToString(),
                    BreastLocations.LeftRing.ToString(),
                    BreastLocations.LeftMiddle.ToString(),
                    BreastLocations.RightShoulder.ToString(),
                    BreastLocations.LeftShoulder.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds = { "mam_m_060218" },
                EnumValues =
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.RightTopOuter.ToString(),
                    BreastLocations.RightTopInner.ToString(),
                    BreastLocations.LeftTopOuter.ToString(),
                    BreastLocations.LeftTopInner.ToString(),
                    BreastLocations.RightBottomInner.ToString(),
                    BreastLocations.RightBottomOuter.ToString(),
                    BreastLocations.LeftBottomOuter.ToString(),
                    BreastLocations.LeftBottomInner.ToString(),
                    BreastLocations.RightShoulder.ToString(),
                    BreastLocations.LeftShoulder.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds = { "mam_m_020518", "mam_m_040204", "mam_m_040304", "mam_m_040404" },
                EnumValues =
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.RightTopOuter.ToString(),
                    BreastLocations.RightTopInner.ToString(),
                    BreastLocations.LeftTopOuter.ToString(),
                    BreastLocations.LeftTopInner.ToString(),
                    BreastLocations.RightBottomInner.ToString(),
                    BreastLocations.RightBottomOuter.ToString(),
                    BreastLocations.LeftBottomOuter.ToString(),
                    BreastLocations.LeftBottomInner.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds = { "mam_m_010505", "mam_m_020519", "mam_m_050311-1", "mam_m_050311-2" },
                EnumValues =
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.Left.ToString(),
                    BreastLocations.Right.ToString(),
                    BreastLocations.LeftShoulder.ToString(),
                    BreastLocations.RightShoulder.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds = { "mam_m_010506", "mam_m_020218", "mam_m_020506", "mam_m_040107", "mam_m_040505", "mam_m_050406-1" },
                EnumValues = 
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.Left.ToString(),
                    BreastLocations.Right.ToString()
                }
            }
        };

        public MammaMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtPatientIndication, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtAnatomy, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtAnatomyEnhancement, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtDiagnosis, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtLymphs, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtBones, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtRating, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMrtDiagnosis, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Mamma MRT module");
            }

            return result;
        }
    }
}
