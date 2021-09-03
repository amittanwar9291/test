using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ShoulderMRT.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Domain.Models
{
	public class SoftPartsFinding : FindingBase
	{
		public override string InstanceName => FindingType.ToString();

		[RadioReportId("sho_m_080106")]
		public SoftPartsFindingType FindingType { get; set; }

		#region LymphNodes

		public LymphNodesAxillaryType LymphNodesAxillaryType { get; set; }

		[RadioReportId("sho_m_080206", InstanceName = nameof(SoftPartsFindingType.LymphNodes))]
		public int? LargestTransverseDiameterInMm { get; set; }

		#endregion

		#region Musculature

		public LocationType LocationType { get; set; }

		public DeltoideusLocationType DeltoideusLocationType { get; set; }

		public IEnumerable<MusculatureFinding> MusculatureFindings { get; set; }
		#endregion

		#region SternoclavicularJoint
		public SternoclavicularJointType SternoclavicularJointType { get; set; }

		[RadioReportId("sho_m_080226", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsSclerosis { get; set; }

		[RadioReportId("sho_m_080227", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsSubchondralCysts { get; set; }

		[RadioReportId("sho_m_080228", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsArthrosisArticularEffusion { get; set; }

		[RadioReportId("sho_m_080230", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsErosions { get; set; }

		[RadioReportId("sho_m_080231", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsSynovitis { get; set; }

		[RadioReportId("sho_m_080232", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsInflammationArticularEffusion { get; set; }

		[RadioReportId("sho_m_080234", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsRuptureSternoclavicularLigament {get; set; }

		[RadioReportId("sho_m_080235", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		public bool IsRuptureDiscusArticularis { get; set; }
		#endregion

		#region Pleura
		public PleuraType PleuraType { get; set; }
		#endregion
	}
}