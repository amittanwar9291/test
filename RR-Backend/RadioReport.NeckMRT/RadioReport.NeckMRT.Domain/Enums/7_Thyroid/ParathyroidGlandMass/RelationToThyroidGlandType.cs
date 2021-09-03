using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum RelationToThyroidGlandType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070276", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		AnteriorCaudal = 1,

		[RadioReportId("nec_m_070277", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		VentralCaudal = 2,

		[RadioReportId("nec_m_070278", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		PosteriorCranial = 3,

		[RadioReportId("nec_m_070279", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		PosteriorCaudal = 4
	}
}