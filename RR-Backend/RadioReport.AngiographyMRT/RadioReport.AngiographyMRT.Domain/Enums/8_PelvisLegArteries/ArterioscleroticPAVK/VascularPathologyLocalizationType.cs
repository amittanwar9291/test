using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum VascularPathologyLocalizationType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080436", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        CommonFemoralArtery = 1,

        [RadioReportId("ang_m_080437", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SuperficialFemoralArtery = 2,

        [RadioReportId("ang_m_080438", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        PoplitealArtery = 3
    }
}
