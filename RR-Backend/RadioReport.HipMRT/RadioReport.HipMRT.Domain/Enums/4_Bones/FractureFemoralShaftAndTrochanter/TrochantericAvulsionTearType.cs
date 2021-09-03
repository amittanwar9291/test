using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum TrochantericAvulsionTearType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040516", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        NGreaterTrochanter = 1,

		[RadioReportId("hip_m_040517", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        OLesserTrochanter = 2
	}
}
