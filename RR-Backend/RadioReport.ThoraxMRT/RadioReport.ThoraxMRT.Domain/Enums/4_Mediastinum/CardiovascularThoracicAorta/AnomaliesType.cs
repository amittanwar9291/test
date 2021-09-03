using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum AnomaliesType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040342", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        AorticCoarctation = 1,

        [RadioReportId("tho_m_040343", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        KinkingOfTheAorticArch = 2,

        [RadioReportId("tho_m_040344", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        CongenitalVascularRings = 3
    }
}

