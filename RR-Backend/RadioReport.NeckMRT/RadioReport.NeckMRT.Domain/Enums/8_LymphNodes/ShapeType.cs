using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.LymphNodes
{
	public enum ShapeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_080306", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		Oval = 1,

		[RadioReportId("nec_m_080307", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		Round = 2,

		[RadioReportId("nec_m_080308", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		Lobulated = 3

	}
}
