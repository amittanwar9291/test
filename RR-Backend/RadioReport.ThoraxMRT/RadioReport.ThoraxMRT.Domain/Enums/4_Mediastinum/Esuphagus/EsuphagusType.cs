using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum EsuphagusType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040269", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Dilatation = 1,

        [RadioReportId("tho_m_040270", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Stenosis = 2,

        [RadioReportId("tho_m_040271", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        CalibreChange = 3,

        [RadioReportId("tho_m_040272", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Mass = 4,

        [RadioReportId("tho_m_040273", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Diverticula = 5,

        [RadioReportId("tho_m_040274", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        DuplicationCyst = 6,

        [RadioReportId("tho_m_040275", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Varices = 7,

        [RadioReportId("tho_m_040276", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        HiatalHernia = 8,

        [RadioReportId("tho_m_040277", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        ParaesophagealHernia = 9
    }
}
