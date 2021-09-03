using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum MinimumDistanceToMesorectalFasciaType : byte
	{
		None = 0,

        [RadioReportId("pel_m_080412", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        NoAnatomicReference = 1,

		[RadioReportId("pel_m_080413", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		NegaticeCrm = 2,

		[RadioReportId("pel_m_080414", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		PositiveCrm = 3
	}
}
