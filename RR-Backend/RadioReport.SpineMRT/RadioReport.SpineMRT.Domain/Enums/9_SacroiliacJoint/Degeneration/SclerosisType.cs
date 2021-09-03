using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum SclerosisType: byte
    {
        None = 0,

        [RadioReportId("spi_m_090404", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        CloseToJoint = 1,

        [RadioReportId("spi_m_090405", InstanceName = nameof(SacroiliacJointFindingType.Degeneration))]
        MoreThan5mm = 2
    }
}
