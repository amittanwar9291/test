using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("tho_m_060426", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060363", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060545", InstanceName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_070246", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070246", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070246", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070246", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070246", InstanceName = nameof(BonesFindingType.SpinalMass))]
        No = 1,

        [RadioReportId("tho_m_060427", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060364", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060546", InstanceName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_070247", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070247", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070247", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070247", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070247", InstanceName = nameof(BonesFindingType.SpinalMass))]
        Little = 2,

        [RadioReportId("tho_m_060428", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060365", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060547", InstanceName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_070248", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070248", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070248", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070248", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070248", InstanceName = nameof(BonesFindingType.SpinalMass))]
        Strong = 3
    }
}
