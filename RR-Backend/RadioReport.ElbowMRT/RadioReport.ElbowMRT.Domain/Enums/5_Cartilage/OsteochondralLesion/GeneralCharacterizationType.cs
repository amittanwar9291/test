using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum GeneralCharacterizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0504101", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		CartilageIntactStableLesion = 1,

		[RadioReportId("elb_m_0504102", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		ChondralLesionUnstableLesion = 2,

		[RadioReportId("elb_m_0504103", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		OrganizedDefectCompletelyFilledWithFluid = 3
	}
}
