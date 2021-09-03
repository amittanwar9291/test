using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum FormOfArthrosisType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060507", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        Moderate = 1,

        [RadioReportId("kne_m_060508", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        Distinct = 2
    }
}