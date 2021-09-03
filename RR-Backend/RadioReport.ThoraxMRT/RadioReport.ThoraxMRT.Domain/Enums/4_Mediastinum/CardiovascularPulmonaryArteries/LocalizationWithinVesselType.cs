using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum LocalizationWithinVesselType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040212", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        FloatingAcute = 1,

		[RadioReportId("tho_m_040215", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        MuralChronic = 2
    }
}
