using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Constants;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum IntensityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080307", InstanceName = InstanceNames.SoftTissues)]
        [RadioReportId("spi_m_070224", InstanceName = InstanceNames.SpinalCanal)]
        Strong = 1,

        [RadioReportId("spi_m_080308", InstanceName = InstanceNames.SoftTissues)]
        [RadioReportId("spi_m_070225", InstanceName = InstanceNames.SpinalCanal)]
        Low = 2
    }
}
