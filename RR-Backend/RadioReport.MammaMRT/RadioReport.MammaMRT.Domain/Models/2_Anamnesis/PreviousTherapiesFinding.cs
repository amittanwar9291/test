using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class PreviousTherapiesFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_m_020404")]
        public TheraphyType FindingType { get; set; }

        [RadioReportId("mam_m_020504")]
        public byte? TheraphyMonth { get; set; }

        [RadioReportId("mam_m_020505")]
        public int? TheraphyYear { get; set; }

        public TimeStatusType TimeStatusType { get; set; }

        [RadioReportId("mam_m_020506", InstanceName = nameof(TheraphyType.BreastAugmentation))]
        [RadioReportId("mam_m_020506", InstanceName = nameof(TheraphyType.BreastAmputation))]
        [RadioReportId("mam_m_020506", InstanceName = nameof(TheraphyType.Radio))]
        [RadioReportId("mam_m_020506", InstanceName = nameof(TheraphyType.BreastReduction))]
        [RadioReportId("mam_m_020506", InstanceName = nameof(TheraphyType.BET))]
        [RadioReportId("mam_m_020518", InstanceName = nameof(TheraphyType.FineNeedleAspiration))]
        [RadioReportId("mam_m_020518", InstanceName = nameof(TheraphyType.VacuumBiopsy))]
        [RadioReportId("mam_m_020518", InstanceName = nameof(TheraphyType.OpenBiopsy))]
        [RadioReportId("mam_m_020519", InstanceName = nameof(TheraphyType.PunchBiopsy))]
        public BreastLocations BreastLocation { get; set; }

        [RadioReportId("mam_m_020508-l", InstanceName = nameof(RightReconstructionLocalization), IsExportable = false)]
        public SideType RightReconstructionLocalization { get; set; }

        [RadioReportId("mam_m_020509-l", InstanceName = nameof(LeftReconstructionLocalization), IsExportable = false)]
        public SideType LeftReconstructionLocalization { get; set; }
    }
}
