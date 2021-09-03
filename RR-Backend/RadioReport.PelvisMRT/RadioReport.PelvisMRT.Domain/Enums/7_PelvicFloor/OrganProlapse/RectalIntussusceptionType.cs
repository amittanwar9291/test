using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.PelvicFloor
{
    public enum RectalIntussusceptionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_070515", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        MucosalInvolvement = 1,

        [RadioReportId("pel_m_070516", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
        ParticipationOfTheEntireRectalWall = 2

    }
}