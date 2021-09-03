using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Models
{
    public class PreviousTherapiesFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_mx_020404")]
        public TheraphyType FindingType { get; set; }

        [RadioReportId("mam_mx_020504")]
        public byte? TheraphyMonth { get; set; }

        [RadioReportId("mam_mx_020505")]
        public int? TheraphyYear { get; set; }

        public TimeStatusType TimeStatusType { get; set; }

        [RadioReportId("mam_mx_020506", InstanceName = nameof(TheraphyType.BreastAugmentation))]
        [RadioReportId("mam_mx_020506", InstanceName = nameof(TheraphyType.BreastAmputation))]
        [RadioReportId("mam_mx_020506", InstanceName = nameof(TheraphyType.Radio))]
        [RadioReportId("mam_mx_020506", InstanceName = nameof(TheraphyType.BreastReduction))]
        [RadioReportId("mam_mx_020506", InstanceName = nameof(TheraphyType.BET))]
        [RadioReportId("mam_mx_020518", InstanceName = nameof(TheraphyType.FineNeedleAspiration))]
        [RadioReportId("mam_mx_020518", InstanceName = nameof(TheraphyType.VacuumBiopsy))]
        [RadioReportId("mam_mx_020518", InstanceName = nameof(TheraphyType.OpenBiopsy))]
        [RadioReportId("mam_mx_020519", InstanceName = nameof(TheraphyType.PunchBiopsy))]
        public BreastLocations BreastLocation { get; set; }

        [RadioReportId("mam_mx_020508-l", InstanceName = nameof(RightReconstructionLocalization), IsExportable = false)]
        public SideType RightReconstructionLocalization { get; set; }

        [RadioReportId("mam_mx_020509-l", InstanceName = nameof(LeftReconstructionLocalization), IsExportable = false)]
        public SideType LeftReconstructionLocalization { get; set; }
    }
}
