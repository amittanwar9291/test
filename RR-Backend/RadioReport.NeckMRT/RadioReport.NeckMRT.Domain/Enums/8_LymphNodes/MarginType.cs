using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.LymphNodes
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("nec_m_080310", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		Circumscribed = 1,

		[RadioReportId("nec_m_080311", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		Noncircumscribed = 2,

		[RadioReportId("nec_m_080312", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		CapsuleTear = 3

	}
}
