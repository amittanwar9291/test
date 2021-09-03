using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DensityType : byte
    {
        None = 0,

        [RadioReportId("tho_c_070452", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_040446", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0805233", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_0805233", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_0805233", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_0805233", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_0805233", InstanceName = nameof(BonesFindingType.MassSternum))]
        FatEquivalent = 1,

        [RadioReportId("tho_c_070453", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_040447", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0805234", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_0805234", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_0805234", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_0805234", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_0805234", InstanceName = nameof(BonesFindingType.MassSternum))]
        LiquidEquivalent = 2,

        [RadioReportId("tho_c_070454", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_040448", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_0805235", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_0805235", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_0805235", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_0805235", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_0805235", InstanceName = nameof(BonesFindingType.MassSternum))]
        SoftTissueTight = 3
    }
}
