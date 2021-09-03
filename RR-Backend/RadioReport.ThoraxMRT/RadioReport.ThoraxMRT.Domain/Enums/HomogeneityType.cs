using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum HomogeneityType : byte
	{
		None = 0,

        [RadioReportId("tho_m_040465", InstanceName = nameof(MediastinumFinding.HomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_040549", InstanceName = nameof(MediastinumFinding.NoCMEnhancementHomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060505", InstanceName = nameof(PleuraFinding.HomogeneityType), CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060429", InstanceName = nameof(PleuraFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060259", InstanceName = nameof(PleuraFinding.HomogeneityType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060366", InstanceName = nameof(PleuraFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070432", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070249", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070432", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070249", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070432", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070249", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070432", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070249", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070432", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.SpinalMass))]
        [RadioReportId("tho_m_070249", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.SpinalMass))]
        Homogeneous = 1,

        [RadioReportId("tho_m_040466", InstanceName = nameof(MediastinumFinding.HomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_040550", InstanceName = nameof(MediastinumFinding.NoCMEnhancementHomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060506", InstanceName = nameof(PleuraFinding.HomogeneityType), CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060430", InstanceName = nameof(PleuraFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060260", InstanceName = nameof(PleuraFinding.HomogeneityType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060367", InstanceName = nameof(PleuraFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070433", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070250", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070433", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070250", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070433", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070250", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070433", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070250", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070433", InstanceName = nameof(BonesFinding.HomogeneityType), CustomConditionName = nameof(BonesFindingType.SpinalMass))]
        [RadioReportId("tho_m_070250", InstanceName = nameof(BonesFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(BonesFindingType.SpinalMass))]
        Heterogeneous = 2
    }
}
