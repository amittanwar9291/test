using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum ChondralLesionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060313", InstanceName = nameof(OsteoInterfaceFindingType.TraumaChondralLesion))]
        Contusion = 1,

        [RadioReportId("kne_m_060314", InstanceName = nameof(OsteoInterfaceFindingType.TraumaChondralLesion))]
        Delamination = 2,

        [RadioReportId("kne_m_060315", InstanceName = nameof(OsteoInterfaceFindingType.TraumaChondralLesion))]
        CartilageFlap = 3,

        [RadioReportId("kne_m_060316", InstanceName = nameof(OsteoInterfaceFindingType.TraumaChondralLesion))]
        CartilageFlake = 4,

        [RadioReportId("kne_m_060317", InstanceName = nameof(OsteoInterfaceFindingType.TraumaChondralLesion))]
        Fissure = 5
    }
}