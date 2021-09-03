using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum CysticChangesType : byte
    {
        None = 0,
        [RadioReportId("tho_m_060329", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060447", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Simple = 1,
        [RadioReportId("tho_m_060330", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060448", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Complex = 2
    }
}
