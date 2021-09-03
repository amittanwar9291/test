using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum ChestWallType : byte
    {
        None = 0,

        [RadioReportId("tho_m_020202", InstanceName = nameof(IndicationType.Mass))]
        ChestWall = 1,

        [RadioReportId("tho_m_020203", InstanceName = nameof(IndicationType.Mass))]
        Mediastinal = 2,

        [RadioReportId("tho_m_020204", InstanceName = nameof(IndicationType.Mass))]
        Intrapulmonary = 3
    }
}
