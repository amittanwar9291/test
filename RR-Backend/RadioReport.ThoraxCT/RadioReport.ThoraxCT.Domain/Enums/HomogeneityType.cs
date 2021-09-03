using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("tho_c_050511", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFinding.HomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504313", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFinding.HomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0503205", InstanceName = nameof(LungParenchymaFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_040443", InstanceName = nameof(MediastinumFinding) + nameof(MediastinumFinding.HomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0505220", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFinding.HomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_070505", InstanceName = nameof(SoftPartsFinding.HomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_0704104", InstanceName = nameof(SoftPartsFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070511", InstanceName = nameof(SoftPartsFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070449", InstanceName = nameof(SoftPartsFinding.HomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070366", InstanceName = nameof(SoftPartsFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_040453", InstanceName = nameof(MediastinumFinding.NoCMEnhancementHomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0804230", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_0804230", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_0804230", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_0804230", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_0804230", InstanceName = nameof(BonesFindingType.MassSternum))]
        Homogeneous = 1,

        [RadioReportId("tho_c_050512", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFinding.HomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504314", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFinding.HomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0503206", InstanceName = nameof(LungParenchymaFinding.ContrastEnhancementHomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_040444", InstanceName = nameof(MediastinumFinding) + nameof(MediastinumFinding.HomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0505221", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFinding.HomogeneityType), CustomConditionName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_070506", InstanceName = nameof(SoftPartsFinding.HomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_0704105", InstanceName = nameof(SoftPartsFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070512", InstanceName = nameof(SoftPartsFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070450", InstanceName = nameof(SoftPartsFinding.HomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070367", InstanceName = nameof(SoftPartsFinding.CMEnhancementHomogeneityType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_040454", InstanceName = nameof(MediastinumFinding.NoCMEnhancementHomogeneityType), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0804231", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_0804231", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_0804231", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_0804231", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_0804231", InstanceName = nameof(BonesFindingType.MassSternum))]
        Heterogeneous = 2
    }
}
