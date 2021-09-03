using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum BursitisHomogeneityType : byte
    {
        None = 0,

        [RadioReportId("pel_m_100443", InstanceName = nameof(BonesFindingType.Bursitis))]
        Homogeneous = 1,

        [RadioReportId("pel_m_100444", InstanceName = nameof(BonesFindingType.Bursitis))]
        Heterogeneous = 2,

        [RadioReportId("pel_m_100445", InstanceName = nameof(BonesFindingType.Bursitis))]
        Marginal = 3
    }
}