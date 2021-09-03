using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum CharacterizationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100326", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.Myelopathy))]
		NoMassEffect = 1,

		[RadioReportId("nec_m_100327", InstanceName = nameof(BonesFindingType.Myelon), CustomConditionName = nameof(MyelonPathologyType.Myelopathy))]
		MassEffect = 2

	}
}
