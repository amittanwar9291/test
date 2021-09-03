using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum InjuryKind : byte
    {
        None = 0,

        [RadioReportId("kne_m_050366")]
        TotalRuptur = 1,

        [RadioReportId("kne_m_050518", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        [RadioReportId("kne_m_050434", InstanceName = nameof(RibbonsFindingType.PosteriorCruciateLigamentPCL))]
        PartialRuptur = 2,
            
        [RadioReportId("kne_m_0503300", InstanceName = nameof(RibbonsFindingType.AnteriorCruciateLigamentACL))]
        [RadioReportId("kne_m_0503301", InstanceName = nameof(RibbonsFindingType.PosteriorCruciateLigamentPCL))]
        WithoutOP = 3,

        [RadioReportId("kne_m_050427")]
        TransplantACL = 4,

        [RadioReportId("kne_m_050443")]
        TransplantPCL = 5
    }
}
