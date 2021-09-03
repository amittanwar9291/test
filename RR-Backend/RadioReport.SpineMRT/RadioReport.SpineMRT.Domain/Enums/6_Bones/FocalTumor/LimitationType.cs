using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Bones
{
    public enum LimitationType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060349", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Sharp = 1,

        [RadioReportId("spi_m_060350", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Unsharp = 2,

        [RadioReportId("spi_m_060351", InstanceName = nameof(BonesFindingType.FocalTumor))]
        PaintBrushBorders = 3
    }
}
