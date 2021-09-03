using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum ContrastDistributionType : byte
    {
        None = 0,

        [RadioReportId("han_m_040493", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Peripheral = 1,

        [RadioReportId("han_m_040494", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Central = 2,

        [RadioReportId("han_m_040495", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        EntireLesion = 3,

        [RadioReportId("han_m_040496", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Septal = 4,

        [RadioReportId("han_m_040497", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        InNidus = 5
    }
}
