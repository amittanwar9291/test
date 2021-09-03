using RadioReport.CardioMRT.Domain.Enums.LeftVentricle;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models
{
	public class LGESegmentalLocalizer : ModelBase, IRadioReportIdConditionEvaluator
	{
		public LGELocalizerType LGELocalizerType { get; set; }

		[RadioReportId("car_m_060423", CustomConditionName = nameof(LGELocalizerType.Segmental))]
        [RadioReportId("car_m_060428", CustomConditionName = nameof(LGELocalizerType.NonSegmental))]
		public VentricleAreaLocalizers TrasmuralSections { get; set; }

		[RadioReportId("car_m_060424", CustomConditionName = nameof(LGELocalizerType.Segmental))]
		[RadioReportId("car_m_060429", CustomConditionName = nameof(LGELocalizerType.NonSegmental))]
		public VentricleAreaLocalizers SubendocardialSections { get; set; }

		[RadioReportId("car_m_060425", CustomConditionName = nameof(LGELocalizerType.Segmental))]
		[RadioReportId("car_m_060430", CustomConditionName = nameof(LGELocalizerType.NonSegmental))]
		public VentricleAreaLocalizers MesocardialSections { get; set; }

		[RadioReportId("car_m_060426", CustomConditionName = nameof(LGELocalizerType.Segmental))]
		[RadioReportId("car_m_060431", CustomConditionName = nameof(LGELocalizerType.NonSegmental))]
		public VentricleAreaLocalizers SubepicardialSections { get; set; }

		[RadioReportId("car_m_060432", CustomConditionName = nameof(LGELocalizerType.NonSegmental))]
		public VentricleAreaLocalizers PointShapedSections { get; set; }

		public bool CheckCondition(string customConditionId) =>
			customConditionId switch
			{
				nameof(LGELocalizerType.NonSegmental) => LGELocalizerType == LGELocalizerType.NonSegmental,
				nameof(LGELocalizerType.Segmental) => LGELocalizerType == LGELocalizerType.Segmental,
				_ => false
			};
    }
}
