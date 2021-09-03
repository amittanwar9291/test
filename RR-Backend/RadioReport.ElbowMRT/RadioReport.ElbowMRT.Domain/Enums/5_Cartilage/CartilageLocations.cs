using RadioReport.Common.Logic.Attributes;
using System;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	[Flags]
	public enum CartilageLocations : byte
	{
		None = 0,

		[RadioReportId("elb_m_050204", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050204", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		AnteriorHumeralCapitulum = 1,

		[RadioReportId("elb_m_050205", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050205", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		PosteriorHumeralCapitulum = 2,

		[RadioReportId("elb_m_050206", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050206", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		AnteriorHumeralTrochlea = 4,

		[RadioReportId("elb_m_050207", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050207", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		PosteriorHumeralTrochlea = 8,

		[RadioReportId("elb_m_050208", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050208", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		UlnaTrochlearNotch = 16,

		[RadioReportId("elb_m_050209", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050209", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		UlnaRadialNotch = 32,

		[RadioReportId("elb_m_050210", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050210", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		RadiusFoveaCapitis = 64,

		[RadioReportId("elb_m_050211", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050211", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		RadiusCircumferentiaRadii = 128
	}
}
