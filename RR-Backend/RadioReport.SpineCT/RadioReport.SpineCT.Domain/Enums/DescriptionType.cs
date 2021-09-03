using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Constants;

namespace RadioReport.SpineCT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060111", InstanceName = InstanceNames.Bones)]
        [RadioReportId("spi_c_080111", InstanceName = InstanceNames.SoftTissues)]
        IDescribe = 1,

        [RadioReportId("spi_c_060112", InstanceName = InstanceNames.Bones)]
        [RadioReportId("spi_c_080110", InstanceName = InstanceNames.SoftTissues)]
        IKnow = 2
    }
}
