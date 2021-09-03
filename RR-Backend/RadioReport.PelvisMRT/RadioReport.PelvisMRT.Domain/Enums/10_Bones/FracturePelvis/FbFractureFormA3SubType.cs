using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormA3SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100593", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SacrococcygealDislocation = 1,

		[RadioReportId("pel_m_100594", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		NonDisplacedFractureOsSacrum = 2,

		[RadioReportId("pel_m_100595", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		DisplacedFractureOsSacrum = 3
	}
}
