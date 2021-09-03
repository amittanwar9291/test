using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.Bones
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060353", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060540", InstanceName = nameof(BonesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060491", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.DiffuseTumor))]
        [RadioReportId("spi_m_0604102", InstanceName = nameof(BonesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.DiffuseTumor))]
        Homogeneous = 1,

        [RadioReportId("spi_m_060354", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060541", InstanceName = nameof(BonesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060492", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.DiffuseTumor))]
        [RadioReportId("spi_m_0604103", InstanceName = nameof(BonesFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.DiffuseTumor))]
        Heterogeneous = 2
    }
}
