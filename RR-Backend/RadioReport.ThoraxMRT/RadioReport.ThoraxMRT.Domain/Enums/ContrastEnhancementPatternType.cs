using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum ContrastEnhancementPatternType : byte
	{
		None = 0,

        [RadioReportId("tho_m_040552", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060432", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060369", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Peripheral = 1,

        [RadioReportId("tho_m_040553", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060434", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060371", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Central = 2,

        [RadioReportId("tho_m_040554", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060433", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060370", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        EntireLesion = 3,

        [RadioReportId("tho_m_040555", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060435", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060372", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        Septal = 4,

        [RadioReportId("tho_m_040556", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_060436", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060373", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        InNidus = 5
    }
}
