using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TossyType : byte
    {
        None = 0,

        [RadioReportId("sho_m_050403", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Tossy1 = 1,

        [RadioReportId("sho_m_050404", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Tossy2 = 2,

        [RadioReportId("sho_m_050405", InstanceName = nameof(RotatorFindingType.ACJoint))]
        Tossy3 = 3
    }
}
