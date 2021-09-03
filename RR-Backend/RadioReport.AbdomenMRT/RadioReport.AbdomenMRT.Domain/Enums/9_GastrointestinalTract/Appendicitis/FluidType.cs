using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum FluidType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090486", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		InTheSurroundingArea = 1,

		[RadioReportId("abd_m_090487", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		Generalized = 2
	}
}