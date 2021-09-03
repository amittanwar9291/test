using RadioReport.CardioMRT.Domain.Enums.LeftVentricle;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models
{
	public class KineticDisorderLocalizer : ModelBase
	{
		[RadioReportId("car_m_060415")]
		public VentricleAreaLocalizers AkinesiaSections { get; set; }

		[RadioReportId("car_m_060416")]
		public VentricleAreaLocalizers DyskinesiaSections { get; set; }

		[RadioReportId("car_m_060417")]
		public VentricleAreaLocalizers HypokinesiaSections { get; set; }
	}
}
