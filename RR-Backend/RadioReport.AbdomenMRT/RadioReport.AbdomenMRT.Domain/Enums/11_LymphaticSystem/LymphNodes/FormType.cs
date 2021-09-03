using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.LymphaticSystem
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("abd_m_110317", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		Oval = 1,

		[RadioReportId("abd_m_110318", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		Round = 2,

		[RadioReportId("abd_m_110319", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		Irregular = 3
	}
}