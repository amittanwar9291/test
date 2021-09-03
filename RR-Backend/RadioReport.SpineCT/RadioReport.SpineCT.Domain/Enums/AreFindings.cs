using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Constants;

namespace RadioReport.SpineCT.Domain.Enums
{
    public enum AreFindings : byte
    {
        None = 0,

        [RadioReportId("spi_c_040104", InstanceName = InstanceNames.Configuration)]
        [RadioReportId("spi_c_050104", InstanceName = InstanceNames.Disc)]
        [RadioReportId("spi_c_060104", InstanceName = InstanceNames.Bones)]
        [RadioReportId("spi_c_080104", InstanceName = InstanceNames.SoftTissues)]
        [RadioReportId("spi_c_090104", InstanceName = InstanceNames.SacroiliacJoint)]
        False = 1,

        [RadioReportId("spi_c_040105", InstanceName = InstanceNames.Configuration)]
        [RadioReportId("spi_c_050105", InstanceName = InstanceNames.Disc)]
        [RadioReportId("spi_c_060105", InstanceName = InstanceNames.Bones)]
        [RadioReportId("spi_c_080105", InstanceName = InstanceNames.SoftTissues)]
        [RadioReportId("spi_c_090106", InstanceName = InstanceNames.SacroiliacJoint)]
        True = 2
    }
}