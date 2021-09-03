using System.Collections.Generic;
using System.Linq;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Services
{
    public class MammaMXReportPageService : ReportPageService
    {
        protected override List<CustomSuggestion> CustomSuggestions { get; } = new List<CustomSuggestion>
        {
            new CustomSuggestion()
            {
                RrIds = { "mam_mx_050208" },
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
                RrIds = { "mam_mx_020518", "mam_mx_040204", "mam_mx_060107", "mam_mx_060305" },
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
                RrIds = { "mam_mx_010505", "mam_mx_020519" },
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
                RrIds = { "mam_mx_010506", "mam_mx_020218", "mam_mx_020506", "mam_mx_030108", 
                    "mam_mx_030111", "mam_mx_030403",  "mam_mx_040107", "mam_mx_040505", "mam_mx_060405" },
                EnumValues =
                {
                    BreastLocations.None.ToString(),
                    BreastLocations.Left.ToString(),
                    BreastLocations.Right.ToString()
                }
            }
        };

        public MammaMXReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxPatientIndication, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxMedicalHistory, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxMammographyParenchymaAnatomy, IsBlocked = true ,PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxMammographyFinding, IsBlocked = true, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxUltrasoundMammaryGlands, IsBlocked = true, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxUltrasoundFinding, IsBlocked = true, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxLymphNodes, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.MammaMxSummary, PageNumber = 9 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 10 });
            }
            else if (presetCode == "custom")
            {
                // TODO: Check this if statement
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for Mamma MX module");
            }

            return result;
        }
    }
}
