using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
	public enum VascularDilatationType : byte
	{
		None = 0,

		[RadioReportId("ang_m_060540", InstanceName = nameof(AortaFindingType.Aortitis))]
        Aneurysm = 1,

        [RadioReportId("ang_m_060541", InstanceName = nameof(AortaFindingType.Aortitis))]
        Ectasia = 2,

        [RadioReportId("ang_m_060542", InstanceName = nameof(AortaFindingType.Aortitis))]
		Ulcer = 3
	}
}
