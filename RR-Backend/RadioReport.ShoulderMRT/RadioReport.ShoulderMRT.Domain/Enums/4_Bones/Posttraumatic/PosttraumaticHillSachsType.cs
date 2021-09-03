using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum PosttraumaticHillSachsType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040211", InstanceName = nameof(BonesFindingType.PostTraumatic))]
        Normal = 1,

        [RadioReportId("sho_m_040215", InstanceName = nameof(BonesFindingType.PostTraumatic))]
        Reverse = 2
    }
}
