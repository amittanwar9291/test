using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Anamnesis
{
	public enum StadiumAccordingToFontaineType : byte
	{
		None = 0,

		[RadioReportId("ang_m_020202", InstanceName = nameof(AnamnesisFindingType.PeripheralArteryDiseasePAD))]
		StageI = 1,

		[RadioReportId("ang_m_020203", InstanceName = nameof(AnamnesisFindingType.PeripheralArteryDiseasePAD))]
		StageIIA = 2,

		[RadioReportId("ang_m_020204", InstanceName = nameof(AnamnesisFindingType.PeripheralArteryDiseasePAD))]
		StageIIB = 3,

		[RadioReportId("ang_m_020205", InstanceName = nameof(AnamnesisFindingType.PeripheralArteryDiseasePAD))]
		StageIII = 4,

		[RadioReportId("ang_m_020206", InstanceName = nameof(AnamnesisFindingType.PeripheralArteryDiseasePAD))]
		StageIV = 5
	}
}
