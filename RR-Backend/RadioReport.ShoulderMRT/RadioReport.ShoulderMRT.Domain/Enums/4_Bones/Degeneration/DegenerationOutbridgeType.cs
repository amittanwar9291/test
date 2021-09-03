using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DegenerationOutbridgeType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040432", InstanceName = nameof(BonesFindingType.Degeneration))]
        Grade1 = 1,

        [RadioReportId("sho_m_040433", InstanceName = nameof(BonesFindingType.Degeneration))]
        Grade2 = 2,

        [RadioReportId("sho_m_040434", InstanceName = nameof(BonesFindingType.Degeneration))]
        Grade3 = 3,

        [RadioReportId("sho_m_040435", InstanceName = nameof(BonesFindingType.Degeneration))]
        Grade4 = 5
    }
}
