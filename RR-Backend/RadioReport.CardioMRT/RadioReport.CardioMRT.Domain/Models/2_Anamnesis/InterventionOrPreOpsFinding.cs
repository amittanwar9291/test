using RadioReport.CardioMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models.Anamnesis
{
	public class InterventionOrPreOpsFinding : FindingBase
	{
		public override string InstanceName => InterventionOrPreOpsFindingType.ToString();

		[RadioReportId("car_m_020303")]
		public InterventionOrPreOpsFindingType InterventionOrPreOpsFindingType { get; set; }

		#region ValveReplacement
		[RadioReportId("car_m_020405", InstanceName = nameof(InterventionOrPreOpsFindingType.ValveReplacement))]
		public bool IsAorticValve { get; set; }

		[RadioReportId("car_m_020405l", IsExportable = false, InstanceName = nameof(InterventionOrPreOpsFindingType.ValveReplacement))]
		public AorticValveType AorticValveType { get; set; }

		[RadioReportId("car_m_020409", InstanceName = nameof(InterventionOrPreOpsFindingType.ValveReplacement))]
		public bool IsMitralValve { get; set; }

		[RadioReportId("car_m_020409l", IsExportable = false, InstanceName = nameof(InterventionOrPreOpsFindingType.ValveReplacement))]
		public MitralValveType MitralValveType { get; set; }
		#endregion

		#region RVOT
		[RadioReportId("car_m_020414", InstanceName = nameof(InterventionOrPreOpsFindingType.RVOTReconstruction))]
		public bool IsPulmonaryArteryBandingPAB { get; set; }
		#endregion
	}
}
