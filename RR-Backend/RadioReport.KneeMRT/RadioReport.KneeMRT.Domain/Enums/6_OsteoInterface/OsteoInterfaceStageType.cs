using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum OsteoInterfaceStageType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060426", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        One = 1,

        [RadioReportId("kne_m_060427", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        TwoA = 2,

        [RadioReportId("kne_m_060428", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        TwoB = 3,

        [RadioReportId("kne_m_060429", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        Three = 4,

        [RadioReportId("kne_m_060430", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        Four = 5,

        [RadioReportId("kne_m_060448", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        Five = 6
    }
}