using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum OsseousAvulsionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0805202", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        SpinaIliacaAnteriorSuperior = 1,

        [RadioReportId("kne_m_0805203", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        SpinaIliacaAnteriorInferior = 2,

        [RadioReportId("kne_m_0805204", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        SciaticTuber = 3,

        [RadioReportId("kne_m_0805205", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        LesserTrochanter = 4,

        [RadioReportId("kne_m_0805206", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        FemoralDiaphysisPosterior = 5
    }
}
