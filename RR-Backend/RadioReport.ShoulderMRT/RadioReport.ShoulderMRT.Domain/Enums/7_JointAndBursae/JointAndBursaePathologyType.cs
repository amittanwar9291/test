using RadioReport.Common.Logic.Attributes;


namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum JointAndBursaePathologyType : byte
    {
        None = 0,

        [RadioReportId("sho_m_070204", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        Osteochondromatosis = 1,

        [RadioReportId("sho_m_070205", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        AdhesiveCapsulitis = 2,

        [RadioReportId("sho_m_070206", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        Synovialltis = 3,

        [RadioReportId("sho_m_070207", InstanceName = nameof(JointAndBursaeFindingType.Capsule))]
        Rupture = 4
    }
}
