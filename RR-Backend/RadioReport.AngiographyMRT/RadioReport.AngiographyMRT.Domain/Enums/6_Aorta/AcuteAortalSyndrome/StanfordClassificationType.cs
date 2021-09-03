using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
	public enum StanfordClassificationType : byte
	{
		None = 0,

		[RadioReportId("ang_m_060417", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        ABeginningInAscendingAorta = 1,

		[RadioReportId("ang_m_060418", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        BBeginningDistalToTheLeftSubclavianArtery = 2
	}
}
