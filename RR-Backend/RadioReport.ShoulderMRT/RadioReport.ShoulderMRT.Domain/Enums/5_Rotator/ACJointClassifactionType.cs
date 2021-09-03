using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum ACJointClassificationType: byte
    {
        None = 0,

        [RadioReportId("sho_m_050401", InstanceName = nameof(RotatorFindingType.ACJoint))]
        TossyClassification = 1,

        [RadioReportId("sho_m_050406", InstanceName = nameof(RotatorFindingType.ACJoint))]
        RockwoodClassification = 2
    }
}
