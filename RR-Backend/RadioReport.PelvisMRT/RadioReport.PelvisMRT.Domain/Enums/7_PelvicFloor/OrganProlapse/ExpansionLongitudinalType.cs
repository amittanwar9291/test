using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum ExpansionLongitudinalType : byte
    {
        None = 0,

        [RadioReportId("pel_m_070518", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        Intrarectal = 1,

        [RadioReportId("pel_m_070519", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        Intraanal = 2,

        [RadioReportId("pel_m_070520", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        ExtraanalWithRectalProlapse = 3
    }
}