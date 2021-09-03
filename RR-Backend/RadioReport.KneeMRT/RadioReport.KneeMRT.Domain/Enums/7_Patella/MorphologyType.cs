using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum MorphologyType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070408", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        Contusion = 1,

        [RadioReportId("kne_m_070410", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        Fissure = 2,

        [RadioReportId("kne_m_070412", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        Delamination = 3,

        [RadioReportId("kne_m_070414", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        CartilageFlake = 4,

        [RadioReportId("kne_m_070416", InstanceName = nameof(PatellaFindingType.RetropatellarChondropathy))]
        CartilageFlap = 5
    }
}
