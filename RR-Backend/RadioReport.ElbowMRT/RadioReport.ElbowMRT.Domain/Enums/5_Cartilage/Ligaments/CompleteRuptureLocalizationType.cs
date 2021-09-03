using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum CompleteRuptureLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050516", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050530", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		Proximal = 1,

		[RadioReportId("elb_m_050517", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050531", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		Distal = 2
	}
}
