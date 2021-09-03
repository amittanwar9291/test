using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040230", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        AorticAnomalies = 1,

        [RadioReportId("tho_m_040231", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        AorticAneurysm = 2
    }
}

