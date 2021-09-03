using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum AnamnesisSideType : byte
    {
        None = 0,

        [RadioReportId("tho_m_020413", InstanceName = nameof(AnamnesisFindingType.TrachealTubeMalposition))]
        RightMainBronchus = 1,

        [RadioReportId("tho_m_020414", InstanceName = nameof(AnamnesisFindingType.TrachealTubeMalposition))]
        LeftMainBronchus = 2
    }
}
