using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum QualityType : byte
	{
		None = 0,

		[RadioReportId("tho_m_060402", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Transudate = 1,

		[RadioReportId("tho_m_060403", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Exsudate = 2,

		[RadioReportId("tho_m_060404", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Hematothorax = 3,

		[RadioReportId("tho_m_060406", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Chylothorax = 4,

		[RadioReportId("tho_m_060408", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Empyema = 5
	}
}
