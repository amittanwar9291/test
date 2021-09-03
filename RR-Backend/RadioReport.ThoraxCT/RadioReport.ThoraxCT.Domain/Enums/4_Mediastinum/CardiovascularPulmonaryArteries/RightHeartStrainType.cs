using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum RightHeartStrainType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040226", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		Without = 1,

		[RadioReportId("tho_c_040227", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
		With = 2
    }
}
