using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum InflammatoryBoneMarrowEdemaType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0404109", InstanceName = nameof(BonesFindingType.Arthritis))]
		Subchondral = 1,

		[RadioReportId("anc_m_0404110", InstanceName = nameof(BonesFindingType.Arthritis))]
		Diaphyseal = 2

	}
}
