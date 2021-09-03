using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0804304", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Circumscribed = 1,

        [RadioReportId("spi_c_0804305", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        NonCircumscribed = 2
    }
}
