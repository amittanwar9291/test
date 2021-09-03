using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("mam_m_020511", InstanceName = nameof(PreviousTherapiesFinding.RightReconstructionLocalization))]
        RightOwnFatTissue = 1,

        [RadioReportId("mam_m_020512", InstanceName = nameof(PreviousTherapiesFinding.LeftReconstructionLocalization))]
        LeftOwnFatTissue = 2,

        [RadioReportId("mam_m_020514", InstanceName = nameof(PreviousTherapiesFinding.RightReconstructionLocalization))]
        RightSilicone = 3,

        [RadioReportId("mam_m_020515", InstanceName = nameof(PreviousTherapiesFinding.LeftReconstructionLocalization))]
        LeftSilicone = 4
    }
}
