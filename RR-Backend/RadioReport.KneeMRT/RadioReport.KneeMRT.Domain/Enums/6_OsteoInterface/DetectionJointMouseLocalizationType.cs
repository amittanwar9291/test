using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum DetectionJointMouseLocalizationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060433", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        MediaCompartment = 1,

        [RadioReportId("kne_m_060446", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        LateralCompartment = 2,

        [RadioReportId("kne_m_060447", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        FemoropatelarCompartment = 3
    }
}