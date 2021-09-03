using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum SacroiliacJointEntheitisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_090318", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        Asymetric = 1,

        [RadioReportId("spi_m_090319", InstanceName = nameof(SacroiliacJointFindingType.Inflammation))]
        Symetric = 2
    }
}
