using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LocalizationWithinVesselType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040216", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Floating = 1,

		[RadioReportId("tho_c_040218", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        WallAdherentOrChronic = 2
    }
}
