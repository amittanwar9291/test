using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040349", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        SackShaped = 1,

        [RadioReportId("tho_m_040350", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        Fusiform = 2,

        [RadioReportId("tho_m_040468", InstanceName = nameof(MediastinumFindingType.Mass))]
        Round = 3,

        [RadioReportId("tho_m_040469", InstanceName = nameof(MediastinumFindingType.Mass))]
        Oval = 4,

        [RadioReportId("tho_m_040470", InstanceName = nameof(MediastinumFindingType.Mass))]
        Multilobulated = 5,

        [RadioReportId("tho_m_040471", InstanceName = nameof(MediastinumFindingType.Mass))]
        Irregular = 6
    }
}

