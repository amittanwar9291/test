using RadioReport.CardioMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models.Anamnesis
{
	public class IndicationFinding : FindingBase
	{
		public override string InstanceName => IndicationFindingType.ToString();

		[RadioReportId("car_m_020106")]
		public IndicationFindingType IndicationFindingType { get; set; }

		#region CoronaryHeartDisease
		[RadioReportId("car_m_020203l", IsExportable = false, InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public StatusType StatusType { get; set; }

		[RadioReportId("car_m_020205l", IsExportable = false, InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public KnownType KnownType { get; set; }

		[RadioReportId("car_m_020210", InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public bool IsECG { get; set; }

		[RadioReportId("car_m_020211", InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public bool IsEchocardiography { get; set; }

		[RadioReportId("car_m_020212", InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public bool IsSPECT { get; set; }

		[RadioReportId("car_m_020213", InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public bool IsPET { get; set; }

		[RadioReportId("car_m_020214", InstanceName = nameof(IndicationFindingType.CoronaryHeartDisease))]
		public bool IsCT { get; set; }
		#endregion

		#region rest
		[RadioReportId("car_m_020216")]
		public bool IsSuspicionOf { get; set; }
		#endregion
	}
}
