using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum ArteriopathyType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080330", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Occlusion = 1,

        [RadioReportId("spi_m_080331", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Hypoplasia = 2,

        [RadioReportId("spi_m_080336", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Elongation = 3,

        [RadioReportId("spi_m_080333", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Aneurysm = 4

    }
}
