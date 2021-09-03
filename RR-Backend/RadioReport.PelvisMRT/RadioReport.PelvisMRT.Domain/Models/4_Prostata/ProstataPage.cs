using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.PelvisMRT.Domain.Enums;
using RadioReport.PelvisMRT.Domain.Enums.Prostata;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Constants;

namespace RadioReport.PelvisMRT.Domain.Models
{
    [GeneratedControllerPageModel("PelvisMRT/Prostata")]
    public class ProstataPage : PageModelBase<ProstataPage>
    {
        [RadioReportId("pel_m_040104-l", InstanceName = InstanceNames.Prostata, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        public IEnumerable<ProstataFinding> Findings { get; set; }

        public override string PageTypeName => PageTypeNames.PelvisMrtProstata;

        [RadioReportId("pel_m_040203")]
        public int? WidthInMm { get; set; }

        [RadioReportId("pel_m_040205")]
        public int? HeightInMm { get; set; }

        [RadioReportId("pel_m_040207")]
        public int? APdiameterInMm { get; set; }

        [RadioReportId("pel_m_040210", DecimalPlaces = 1)]
        public decimal? VolumeInCm3 { get; set; }

        public VolumeType VolumeType { get; set; }

        [RadioReportId("pel_m_040215", DecimalPlaces = 2)]
        public decimal? PsaVolume { get; set; }

        public PsaVolumeType PsaVolumeType { get; set; }

    }
}
