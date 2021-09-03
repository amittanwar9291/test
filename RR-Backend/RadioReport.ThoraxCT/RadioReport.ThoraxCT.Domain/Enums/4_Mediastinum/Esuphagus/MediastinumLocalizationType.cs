using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum MediastinumLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("tho_c_040371", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        ProximalOneThird = 1,

        [RadioReportId("tho_c_040372", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        MiddleOneThird = 2,

        [RadioReportId("tho_c_040373", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        DistalOneThird = 3
    }
}
