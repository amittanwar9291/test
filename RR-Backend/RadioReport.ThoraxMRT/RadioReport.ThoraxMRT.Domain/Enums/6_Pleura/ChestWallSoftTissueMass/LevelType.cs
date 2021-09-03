using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum LevelType : byte
    {
        None = 0,
        [RadioReportId("tho_m_060450", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        LiquidLiquidLevel = 1,
        [RadioReportId("tho_m_060451", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        BloodLiquidLevel = 2
    }
}
