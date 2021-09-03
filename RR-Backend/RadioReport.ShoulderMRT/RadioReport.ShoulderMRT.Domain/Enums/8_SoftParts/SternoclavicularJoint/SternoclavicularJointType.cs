using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum SternoclavicularJointType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080225", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		ActivatedOsteoarthritis = 1,

		[RadioReportId("sho_m_080229", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		Inflammation = 2,

		[RadioReportId("sho_m_080233", InstanceName = nameof(SoftPartsFindingType.SternoclavicularJoint))]
		Luxation = 3

	}
}
