using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum HistologySecuredType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060235", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        Benign = 1,

        [RadioReportId("spi_m_060236", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        Malignant = 2
    }
}