using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SacroiliacJoint
{
    public enum ExtensionType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_090205")]
        Symmetrical = 1,
        
        [RadioReportId("spi_c_090206")]
        Asymmetric = 2,
    }
}
