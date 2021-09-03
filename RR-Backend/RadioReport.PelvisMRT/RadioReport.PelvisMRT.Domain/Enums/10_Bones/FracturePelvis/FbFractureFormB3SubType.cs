using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormB3SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_1005101", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		B21AndContralateralB22 = 1,

		[RadioReportId("pel_m_1005102", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		B32BilateralB21 = 2,

		[RadioReportId("pel_m_1005103", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		B33BilateralsB23 = 3
	}
}
