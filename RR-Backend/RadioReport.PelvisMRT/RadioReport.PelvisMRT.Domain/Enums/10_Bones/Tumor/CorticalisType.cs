using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum CorticalisType : byte
    {
        None = 0,

        [RadioReportId("pel_m_100389", InstanceName = nameof(BonesFindingType.Tumor))]
        Intact = 1,

        [RadioReportId("pel_m_100390", InstanceName = nameof(BonesFindingType.Tumor))]
        Destruction = 2,

        [RadioReportId("pel_m_100391", InstanceName = nameof(BonesFindingType.Tumor))]
        Thinning = 3,

        [RadioReportId("pel_m_100392", InstanceName = nameof(BonesFindingType.Tumor))]
        Transmigration = 4
    }
}