using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum CorticalisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060474", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Intact = 1,

        [RadioReportId("spi_m_060475", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Destruction = 2,

        [RadioReportId("spi_m_060476", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Thinning = 3,

        [RadioReportId("spi_m_060477", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Penetration = 4
    }
}
