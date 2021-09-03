using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.SpineCT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using System;

namespace RadioReport.SpineCT.Domain.Services
{
    public class SpineCTReportPageService : ReportPageService
    {
        protected override List<CustomSuggestion> CustomSuggestions { get; } = new List<CustomSuggestion>
        {
            new CustomSuggestion()
            {
                RrIds = {
                    "spi_c_020222", "spi_c_020403", "spi_c_020409",
                    "spi_c_0403202", "spi_c_0404202", "spi_c_0405202",
                    "spi_c_0603204", "spi_c_0603208", "spi_c_0602202", "spi_c_060203",
                    "spi_c_070208", "spi_c_070442",
                    "spi_c_080204", "spi_c_0803325"
                },
                EnumValues = 
                {
                    SpineLocations.None.ToString(),
                    SpineLocations.C0.ToString(),
                    SpineLocations.C1.ToString(),
                    SpineLocations.C2.ToString(),
                    SpineLocations.C3.ToString(),
                    SpineLocations.C4.ToString(),
                    SpineLocations.C5.ToString(),
                    SpineLocations.C6.ToString(),
                    SpineLocations.C7.ToString(),
                    SpineLocations.TH1.ToString(),
                    SpineLocations.TH2.ToString(),
                    SpineLocations.TH3.ToString(),
                    SpineLocations.TH4.ToString(),
                    SpineLocations.TH5.ToString(),
                    SpineLocations.TH6.ToString(),
                    SpineLocations.TH7.ToString(),
                    SpineLocations.TH8.ToString(),
                    SpineLocations.TH9.ToString(),
                    SpineLocations.TH10.ToString(),
                    SpineLocations.TH11.ToString(),
                    SpineLocations.TH12.ToString(),
                    SpineLocations.L1.ToString(),
                    SpineLocations.L2.ToString(),
                    SpineLocations.L3.ToString(),
                    SpineLocations.L4.ToString(),
                    SpineLocations.L5.ToString(),
                    SpineLocations.OsSacrum.ToString(),
                    SpineLocations.OsCoccygis.ToString()
                }
            },
            new CustomSuggestion()
            {
                RrIds =  {
                    "spi_c_020415",
                    "spi_c_050203",
                    "spi_c_0603210"
                },
                EnumValues =
                {
                    SpineLocations.None.ToString(),
                    SpineLocations.C1d.ToString(),
                    SpineLocations.C2d.ToString(),
                    SpineLocations.C3d.ToString(),
                    SpineLocations.C4d.ToString(),
                    SpineLocations.C5d.ToString(),
                    SpineLocations.C6d.ToString(),
                    SpineLocations.C7d.ToString(),
                    SpineLocations.TH1d.ToString(),
                    SpineLocations.TH2d.ToString(),
                    SpineLocations.TH3d.ToString(),
                    SpineLocations.TH4d.ToString(),
                    SpineLocations.TH5d.ToString(),
                    SpineLocations.TH6d.ToString(),
                    SpineLocations.TH7d.ToString(),
                    SpineLocations.TH8d.ToString(),
                    SpineLocations.TH9d.ToString(),
                    SpineLocations.TH10d.ToString(),
                    SpineLocations.TH11d.ToString(),
                    SpineLocations.TH12d.ToString(),
                    SpineLocations.L1d.ToString(),
                    SpineLocations.L2d.ToString(),
                    SpineLocations.L3d.ToString(),
                    SpineLocations.L4d.ToString(),
                    SpineLocations.L5d.ToString()
                }
            }
        };

        public SpineCTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            if (presetCode == null) throw new ArgumentNullException(nameof(presetCode));

            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtConfiguration, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtDisc, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtBones, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtMyelonSpinalCanal, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtSoftTissues, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtSacroiliacJoint, PageNumber = 9, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineCtSummary, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 11 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for SpineCT module");
            }

            return result;
        }
    }
}
