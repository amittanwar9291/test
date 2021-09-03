using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum AfflicationType: byte
    {
        None = 0,

        [RadioReportId("sho_m_050202", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Degeneration = 1,

        [RadioReportId("sho_m_050204", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Trauma = 2,

        [RadioReportId("sho_m_050206", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Inflammation = 3
    }
}
