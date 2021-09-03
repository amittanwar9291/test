using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("spi_m_040104", InstanceName = InstanceNames.Configuration)]
        [RadioReportId("spi_m_050104", InstanceName = InstanceNames.Disc)]
        [RadioReportId("spi_m_060104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("spi_m_070104", InstanceName = InstanceNames.SpinalCanal)]
        [RadioReportId("spi_m_080104", InstanceName = InstanceNames.SoftTissues)]
        False = 1,

        [RadioReportId("spi_m_040105", InstanceName = InstanceNames.Configuration)]
        [RadioReportId("spi_m_050105", InstanceName = InstanceNames.Disc)]
        [RadioReportId("spi_m_060105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("spi_m_070105", InstanceName = InstanceNames.SpinalCanal)]
        [RadioReportId("spi_m_080105", InstanceName = InstanceNames.SoftTissues)]
        True = 2
    }
}