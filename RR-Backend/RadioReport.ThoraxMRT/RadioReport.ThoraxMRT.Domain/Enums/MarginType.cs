using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum MarginType : byte
    {
        None = 0,
        [RadioReportId("tho_m_060423", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060256", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070429", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070429", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070429", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070429", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070429", InstanceName = nameof(BonesFindingType.SpinalMass))]
        Circumscribed = 1,

        [RadioReportId("tho_m_060424", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060257", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070430", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070430", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070430", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070430", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070430", InstanceName = nameof(BonesFindingType.SpinalMass))]
        NonCircumscribed = 2
    }
}
