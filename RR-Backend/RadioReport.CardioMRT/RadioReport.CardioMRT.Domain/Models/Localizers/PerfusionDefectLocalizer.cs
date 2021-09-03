using RadioReport.CardioMRT.Domain.Enums.LeftVentricle;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models
{
	public class PerfusionDefectLocalizer : ModelBase
	{
		[RadioReportId("car_m_060419")]
		public VentricleAreaLocalizers UnderStressSections { get; set; }

		[RadioReportId("car_m_060420")]
		public VentricleAreaLocalizers InPeaceAndUnderStressSections { get; set; }

		[RadioReportId("car_m_060421")]
		public VentricleAreaLocalizers InPeaceSections { get; set; }
	}
}
