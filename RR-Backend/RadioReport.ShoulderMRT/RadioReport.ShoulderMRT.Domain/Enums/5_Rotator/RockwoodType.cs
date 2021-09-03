using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum RockwoodType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050408", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Grade1 = 1,

        [RadioReportId("sho_m_050409", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Grade2 = 2,

        [RadioReportId("sho_m_050410", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Grade3 = 3,

        [RadioReportId("sho_m_050411", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Grade4 = 4,

        [RadioReportId("sho_m_050412", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Grade5 = 5,

        [RadioReportId("sho_m_050413", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Grade6 = 6
    }
}
