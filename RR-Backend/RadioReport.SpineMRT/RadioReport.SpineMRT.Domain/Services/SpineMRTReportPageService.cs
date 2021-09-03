using System;
using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Services
{
    public class SpineMRTReportPageService : ReportPageService
    {
        protected override List<CustomSuggestion> CustomSuggestions { get; } = new List<CustomSuggestion>
        {
            new CustomSuggestion()
            {
                RrIds = { "spi_m_010104", "spi_m_020203", "spi_m_020204", "spi_m_040228",
                "spi_m_040322", "spi_m_040411", "spi_m_060203", "spi_m_060204", "spi_m_0603100", "spi_m_0604201",
                "spi_m_060368", "spi_m_060237", "spi_m_060565", "spi_m_070203", "spi_m_070312", "spi_m_070434",
                "spi_m_070320", "spi_m_080204", "spi_m_080412" },
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
                RrIds = { "spi_m_020207", "spi_m_040209", "spi_m_040308", "spi_m_040408",
                "spi_m_040212", "spi_m_050203", "spi_m_050205", "spi_m_050209" },
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

        public SpineMRTReportPageService(IEnumerable<IPageManager> pageManagers, ModuleContext moduleContext, IReportManager reportManager) : base(pageManagers,
            moduleContext, reportManager)
        {
        }

        public override List<PageInfo> GetPagesForPreset(string presetCode)
        {
            if (presetCode == null) throw new ArgumentNullException(nameof(presetCode));

            var result = new List<PageInfo>();

            if (presetCode == "full")
            {
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtLocalization, PageNumber = 1 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtAnamnesis, PageNumber = 2 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtTechnology, PageNumber = 3 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtConfiguration, PageNumber = 4 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtDisc, PageNumber = 5 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtBones, PageNumber = 6 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtSpinalCanal, PageNumber = 7 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtSoftTissues, PageNumber = 8 });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtSacroiliacJoint, PageNumber = 9, IsBlocked = true });
                result.Add(new PageInfo { TypeName = PageTypeNames.SpineMrtSummary, PageNumber = 10 });
                result.Add(new PageInfo { TypeName = PageTypeNames.CoreReportResults, PageNumber = 11 });
            }
            else
            {
                throw new PresetNotFoundException($"Cannot find {presetCode} preset for SpineMRT module");
            }

            return result;
        }
    }
}
