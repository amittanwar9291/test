using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum EsuphagusLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("tho_m_040371", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        ProximalOneThird = 1,

        [RadioReportId("tho_m_040372", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        MiddleOneThird = 2,

        [RadioReportId("tho_m_040373", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        DistalOneThird = 3
    }
}
