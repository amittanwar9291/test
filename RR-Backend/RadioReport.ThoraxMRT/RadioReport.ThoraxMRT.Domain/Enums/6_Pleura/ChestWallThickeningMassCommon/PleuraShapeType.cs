using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum PleuraShapeType : byte
    {
        None = 0,
        [RadioReportId("tho_m_060508", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060262", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Round = 1,
        [RadioReportId("tho_m_060509", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060263", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Lobulated = 2,
        [RadioReportId("tho_m_060510", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060264", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        BroadBased = 3,
        [RadioReportId("tho_m_060511", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060265", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Pedunculated = 4,
        [RadioReportId("tho_m_060512", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        PleuralThickening = 5
    }
}
