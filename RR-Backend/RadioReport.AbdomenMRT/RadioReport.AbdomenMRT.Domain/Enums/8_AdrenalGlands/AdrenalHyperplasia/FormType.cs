using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.AdrenalGlands
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("abd_m_080414", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		DiffuseHyperplasia = 1,

		[RadioReportId("abd_m_080415", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		NodularHyperplasia = 2,

		[RadioReportId("abd_m_080416", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		MicronodularHyperplasia = 3,

		[RadioReportId("abd_m_080417", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		MacronodularHyperplasia = 4
	}
}