using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum HorizontalExpansionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_070522", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        Circumferent = 1,

        [RadioReportId("pel_m_070523", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        Partially = 2
    }
}