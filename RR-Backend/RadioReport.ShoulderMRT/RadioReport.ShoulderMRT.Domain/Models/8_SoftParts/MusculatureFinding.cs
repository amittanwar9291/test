using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
	public class MusculatureFinding : FindingBase
	{
		public override string InstanceName => FindingType.ToString();

		[RadioReportId("sho_m_080303")]
		public MusculatureFindingType FindingType { get; set; }

		#region MuscularHaematoma
		[RadioReportId("sho_m_080402", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		public bool IsIntramuscular { get; set; }

		[RadioReportId("sho_m_080403", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		public bool IsInterfacial { get; set; }

		[RadioReportId("sho_m_080404", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		public bool IsIntermuscular { get; set; }

		[RadioReportId("sho_m_080406", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		public Common.Module.Logic.Enums.Pages.SignalType T1w { get; set; }

		[RadioReportId("sho_m_080408", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		public Common.Module.Logic.Enums.Pages.SignalType T2w { get; set; }

		public AgeType AgeType { get; set; }
		#endregion

		#region MuscleLesion
		public ClassificationMunichConsensusType ClassificationMunichConsensusType { get; set; }

		[RadioReportId("sho_m_080507", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		public bool IsCrossDiameterRuptureBelow5Mm { get; set; }

		[RadioReportId("sho_m_080508", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		public bool IsCrossDiameterRuptureOver5Mm { get; set; }

		[RadioReportId("sho_m_080509", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		public int? RetractionInMm { get; set; }

		[RadioReportId("sho_m_080511", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		public bool IsWavyCourseFibres { get; set; }

		[RadioReportId("sho_m_080512", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		public bool IsOsseousAvulsion { get; set; }
		#endregion

		#region OtherFindings
		[RadioReportId("sho_m_080416", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		public bool IsFattyDegeneration { get; set; }

		[RadioReportId("sho_m_080417", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		public bool IsMuscularHypotrophy { get; set; }

		[RadioReportId("sho_m_080418", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		public bool IsMuscularAtrophy { get; set; }

		public MuscularAtrophyType MuscularAtrophyType { get; set; }

		[RadioReportId("sho_m_080421", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		public bool IsApophysitis { get; set; }

		[RadioReportId("sho_m_080422", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		public bool IsFascialTear { get; set; }

		[RadioReportId("sho_m_080423", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		public bool IsMuscleHerniation { get; set; }
		#endregion
	}
}