using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum GeneralType : byte
	{
		None = 0,

		[RadioReportId("hip_m_0405100", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Low = 1,

		[RadioReportId("hip_m_0405101", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Moderate = 2,

		[RadioReportId("hip_m_0405102", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Pronounced = 3
	}
}
