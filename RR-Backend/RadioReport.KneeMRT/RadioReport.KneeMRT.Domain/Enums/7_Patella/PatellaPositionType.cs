using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum PatellaPositionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070322", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        LateralSubluxation = 1,

        [RadioReportId("kne_m_070323", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        LateralLuxation = 2
    }
}
