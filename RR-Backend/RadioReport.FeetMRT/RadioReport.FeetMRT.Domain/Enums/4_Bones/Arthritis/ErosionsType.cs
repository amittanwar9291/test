using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum ErosionsType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0404105", InstanceName = nameof(BonesFindingType.Arthritis))]
		JointFacet = 1,

		[RadioReportId("anc_m_0404106", InstanceName = nameof(BonesFindingType.Arthritis))]
		AtTheCapsularInsertion = 2

	}
}
