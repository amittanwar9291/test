using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum ExtentOfTearType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050418", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050421", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		CompleteTear = 1,

		[RadioReportId("elb_m_050419", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050422", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		PartialTear = 2
	}
}
