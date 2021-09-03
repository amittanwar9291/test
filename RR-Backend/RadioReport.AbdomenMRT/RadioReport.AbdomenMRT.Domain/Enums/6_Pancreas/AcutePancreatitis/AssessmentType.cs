using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
	public enum AssessmentType : byte
	{
		None = 0,

		[RadioReportId("abd_m_060241", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
		AcuteInterstitialEdematouspancreatitis = 1,

		[RadioReportId("abd_m_060242", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
		AcuteNecrotizingpancreatitis = 2

	}
}
