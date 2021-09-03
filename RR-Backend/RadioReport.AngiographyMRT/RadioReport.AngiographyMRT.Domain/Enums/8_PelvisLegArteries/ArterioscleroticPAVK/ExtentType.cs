using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum ExtentType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080440", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularStenosisLessThan10Cm = 1,

		[RadioReportId("ang_m_080441", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularOcclusionLessThan5Cm = 2
	}
}
