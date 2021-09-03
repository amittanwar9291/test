using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LocalPropagationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0404237", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Intracompartimental = 1,

        [RadioReportId("sho_m_0404238", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Extracompartimental = 2
    }
}
