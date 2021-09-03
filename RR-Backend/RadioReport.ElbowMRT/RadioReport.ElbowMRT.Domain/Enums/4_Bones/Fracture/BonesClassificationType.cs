using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum BonesClassificationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040208", InstanceName = nameof(BonesFindingType.Fracture))]
		AO = 1,

		[RadioReportId("elb_m_040209", InstanceName = nameof(BonesFindingType.Fracture))]
        ModifiedAccordingToMason = 2
	}
}
