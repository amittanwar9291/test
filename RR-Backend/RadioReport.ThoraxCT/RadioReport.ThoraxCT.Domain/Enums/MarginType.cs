using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("tho_c_050508", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504310", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0505215", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_0604111", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        [RadioReportId("tho_c_070581", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070446", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_080356", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_080356", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080356", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_080356", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_080356", InstanceName = nameof(BonesFindingType.MassSternum))]
        WellDefined = 1,

        [RadioReportId("tho_c_050509", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504311", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0505214", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_0604112", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        [RadioReportId("tho_c_070582", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        [RadioReportId("tho_c_070447", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_080357", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_080357", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080357", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_080357", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_080357", InstanceName = nameof(BonesFindingType.MassSternum))]
        IllDefined = 2,

        [RadioReportId("tho_c_080358", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_080358", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080358", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_080358", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_080358", InstanceName = nameof(BonesFindingType.MassSternum))]
        BrushShaped = 3
    }
}
