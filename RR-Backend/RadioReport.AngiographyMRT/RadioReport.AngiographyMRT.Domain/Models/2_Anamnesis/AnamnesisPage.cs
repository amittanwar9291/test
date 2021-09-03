using RadioReport.AngiographyMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using System.Collections.Generic;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyMRT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public IEnumerable<AnamnesisFinding> Findings { get; set; }

        [RadioReportId("ang_m_020303")]
        public bool IsPTAOrStentImplantation { get; set; }

        [RadioReportId("ang_m_020304")]
        public bool IsBypass { get; set; }

        [RadioReportId("ang_m_020305")]
        public bool IsLysis { get; set; }

        [RadioReportId("ang_m_020306")]
        public bool IsAfterTransplantation { get; set; }

        public AfterTransplantationType AfterTransplantationType { get; set; }

        [RadioReportId("ang_m_020309")]
        public bool IsValveSurgery { get; set; }

        [RadioReportId("ang_m_020403")]
        public bool IsMRAngiography { get; set; }

        [RadioReportId("ang_m_020405")]
        public byte MonthMRAngiography { get; set; }

        [RadioReportId("ang_m_020406")]
        public int YearMRAngiography { get; set; }

        [RadioReportId("ang_m_020407")]
        public bool IsCTAngiography { get; set; }

        [RadioReportId("ang_m_020409")]
        public byte MonthCTAngiography { get; set; }

        [RadioReportId("ang_m_020410")]
        public int YearCTAngiography { get; set; }

        [RadioReportId("ang_m_020411")]
        public bool IsDigitalSubtractionAngiography { get; set; }

        [RadioReportId("ang_m_020413")]
        public byte MonthDigitalSubtractionAngiography { get; set; }

        [RadioReportId("ang_m_020414")]
        public int YearDigitalSubtractionAngiography { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyMrtAnamnesis;
    }
}
