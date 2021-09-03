using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("tho_m_040114", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060111", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060111", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070111", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070111", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070111", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070111", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070111", InstanceName = nameof(BonesFindingType.SpinalMass))]
        IDescribe = 1,

        [RadioReportId("tho_m_040115", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060112", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060112", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_070112", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070112", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070112", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070112", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070112", InstanceName = nameof(BonesFindingType.SpinalMass))]
        IKnow = 2
    }
}
