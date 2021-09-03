using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum AngleToThoracicWallType : byte
    {
        None = 0,

        [RadioReportId("tho_m_060514", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        Obtuse = 1,

        [RadioReportId("tho_m_060515", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        Acute = 2
    }
}
