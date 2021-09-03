using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum EsuphagusType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040283", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Dilatation = 1,

        [RadioReportId("tho_c_040284", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Stenosis = 2,

        [RadioReportId("tho_c_040285", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        CalibreChange = 3,

        [RadioReportId("tho_c_040286", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Mass = 4,

        [RadioReportId("tho_c_040287", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Diverticula = 5,

        [RadioReportId("tho_c_040288", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        DuplicationCyst = 6,

        [RadioReportId("tho_c_040289", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        Varices = 7,

        [RadioReportId("tho_c_040290", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        AxialHiatalHernia = 8,

        [RadioReportId("tho_c_040291", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        ParaesophagealHernia = 9
    }
}
