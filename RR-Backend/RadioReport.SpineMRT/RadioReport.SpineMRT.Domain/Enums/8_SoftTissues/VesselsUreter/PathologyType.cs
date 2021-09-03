using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SoftTissues
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080346", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Occlusion = 1,

        [RadioReportId("spi_m_080347", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        SinistralVCavaInferior = 2,

        [RadioReportId("spi_m_080348", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        DuplicatedVCavaInferior = 3,

        [RadioReportId("spi_m_080353", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Congestion = 4,

        [RadioReportId("spi_m_080354", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        UreterDuplexFissus = 5
    }
}
