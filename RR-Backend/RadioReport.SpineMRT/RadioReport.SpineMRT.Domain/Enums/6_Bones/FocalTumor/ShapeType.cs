using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060215", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Round = 1,

        [RadioReportId("spi_m_060216", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Lobulated = 2,

        [RadioReportId("spi_m_060217", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Geographic = 3,

        [RadioReportId("spi_m_060218", InstanceName = nameof(BonesFindingType.FocalTumor))]
        BroadBased = 4,

        [RadioReportId("spi_m_060219", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Stalked = 5
    }
}
