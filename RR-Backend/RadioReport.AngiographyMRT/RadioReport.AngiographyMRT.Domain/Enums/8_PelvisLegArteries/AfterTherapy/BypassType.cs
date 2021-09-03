using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum BypassType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080231", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Anatomical = 1,

		[RadioReportId("ang_m_080232", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        ExtraAnatomical = 2
	}
}
