using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Constants;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("tho_c_040111", InstanceName = nameof(MediastinumFinding) + nameof(MediastinumFindingType.Mass), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_050111", InstanceName = nameof(LungParenchymaFindingType.Nodule), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050111", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFindingType.Mass), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050111", InstanceName = nameof(LungParenchymaFindingType.Consolidation), CustomConditionName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_0601106", InstanceName = InstanceNames.LungInterstitium)]
        [RadioReportId("tho_c_070110", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070110", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_080111", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080111", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_080111", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_080111", InstanceName = nameof(BonesFindingType.MassSternum))]
        [RadioReportId("tho_c_080111", InstanceName = nameof(BonesFindingType.MassSpine))]
        IDescribe = 1,
        
        [RadioReportId("tho_c_040112", InstanceName = nameof(MediastinumFinding) + nameof(MediastinumFindingType.Mass), CustomConditionName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_050112", InstanceName = nameof(LungParenchymaFindingType.Nodule), CustomConditionName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050112", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFindingType.Mass), CustomConditionName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050112", InstanceName = nameof(LungParenchymaFindingType.Consolidation), CustomConditionName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_0601107", InstanceName = InstanceNames.LungInterstitium)]
        [RadioReportId("tho_c_070111", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070111", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_080112", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080112", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_080112", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_080112", InstanceName = nameof(BonesFindingType.MassSternum))]
        [RadioReportId("tho_c_080112", InstanceName = nameof(BonesFindingType.MassSpine))]
        IKnow = 2
    }
}
