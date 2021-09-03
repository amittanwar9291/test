using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum TherapyType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080226", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        PTA = 1,

		[RadioReportId("ang_m_080227", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Stent = 2,

		[RadioReportId("ang_m_080228", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Lysis = 3,

		[RadioReportId("ang_m_080229", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        AneurysmSurgery = 4,

        [RadioReportId("ang_m_080230", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Bypass = 5
    }
}
