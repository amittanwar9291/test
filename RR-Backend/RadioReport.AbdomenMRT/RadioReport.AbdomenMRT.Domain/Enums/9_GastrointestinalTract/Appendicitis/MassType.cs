using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum MassType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0902125", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		Malignant = 1,

		[RadioReportId("abd_m_0902126", InstanceName = nameof(GastrointestinalTractFindingType.Appendicitis))]
		Benign = 2
	}
}