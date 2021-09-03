using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum OuterbridgeClassificationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060305", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        [RadioReportId("kne_m_070314", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        GradeI = 1,

        [RadioReportId("kne_m_060306", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        [RadioReportId("kne_m_070315", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        GradeII = 2,

        [RadioReportId("kne_m_060307", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        [RadioReportId("kne_m_070316", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        GradeIII = 3,

        [RadioReportId("kne_m_060308", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        [RadioReportId("kne_m_070317", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        GradeIV = 4
    }
}