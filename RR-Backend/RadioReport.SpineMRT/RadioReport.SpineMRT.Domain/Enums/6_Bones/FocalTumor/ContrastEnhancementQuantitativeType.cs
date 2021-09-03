using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060537", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060499", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        Strong = 1,

        [RadioReportId("spi_m_060538", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_0604100", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        Weak = 2,

        [RadioReportId("spi_m_060539", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_0604101", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        No = 3
    }
}
