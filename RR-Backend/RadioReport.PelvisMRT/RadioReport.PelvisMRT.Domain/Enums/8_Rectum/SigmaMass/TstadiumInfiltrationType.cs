using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum TstadiumInfiltrationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080451", InstanceName = nameof(RectumFindingType.SigmaMass))]
		T4aPeritoneum = 1,

		[RadioReportId("pel_m_080452", InstanceName = nameof(RectumFindingType.SigmaMass))]
		T4bAdjacentOrgan = 2

	}
}
