using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum HistologicallyProvenType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0802304", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Benign = 1,

        [RadioReportId("spi_c_0802305", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        Malignant = 2
    }
}
