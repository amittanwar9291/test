using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum LigamentsLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050213", InstanceName = nameof(CartilageFindingType.Ligaments))]
		MedialCollateralLigamentTear,

		[RadioReportId("elb_m_050215", InstanceName = nameof(CartilageFindingType.Ligaments))]
		LateralCollateralLigamentTear,

		[RadioReportId("elb_m_050217", InstanceName = nameof(CartilageFindingType.Ligaments))]
		DislocationWithLesionsOfMCLAndLCL = 3
	}
}
