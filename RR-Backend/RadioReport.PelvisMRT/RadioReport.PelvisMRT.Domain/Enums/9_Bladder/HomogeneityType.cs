using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0904110", InstanceName = nameof(BladderFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0903127", InstanceName = nameof(BladderFinding.HomogeneityType), CustomConditionName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        [RadioReportId("pel_m_0903115", InstanceName = nameof(BladderFinding.HomogeneityType), CustomConditionName = nameof(BladderFindingType.SoftTissueMass))]
        [RadioReportId("pel_m_0903121", InstanceName = nameof(BladderFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BladderFindingType.SoftTissueMass))]
        Homogeneous = 1,

        [RadioReportId("pel_m_0904111", InstanceName = nameof(BladderFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0903128", InstanceName = nameof(BladderFinding.HomogeneityType), CustomConditionName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        [RadioReportId("pel_m_0903116", InstanceName = nameof(BladderFinding.HomogeneityType), CustomConditionName = nameof(BladderFindingType.SoftTissueMass))]
        [RadioReportId("pel_m_0903122", InstanceName = nameof(BladderFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BladderFindingType.SoftTissueMass))]
        Heterogeneous = 2,

        [RadioReportId("pel_m_0903125", InstanceName = nameof(BladderFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BladderFindingType.SoftTissueMass))]
        Marginal = 3
    }
}