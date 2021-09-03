using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
	public enum PathologyType : byte
	{
		None = 0,

		[RadioReportId("abd_m_070289", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		RenalInfarction = 1,

		[RadioReportId("abd_m_070290", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		RenalCorticalNecrosis = 2,

		[RadioReportId("abd_m_070291", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		RenalVeinThrombosis = 3
	}
}