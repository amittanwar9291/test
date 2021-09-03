using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum InsertionAnteriorType : byte
    {
        None = 0,

        [RadioReportId("sho_m_070403", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        Type1 = 1,

        [RadioReportId("sho_m_070404", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        Type2 = 2,

        [RadioReportId("sho_m_070405", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        Type3 = 3
    }
}
