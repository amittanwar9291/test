using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DislocationClassificationDetailsType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040588", InstanceName = nameof(BonesFindingType.Dislocation))]
		Medial = 1,

		[RadioReportId("anc_m_040589", InstanceName = nameof(BonesFindingType.Dislocation))]
		Lateral = 2,

		[RadioReportId("anc_m_040590", InstanceName = nameof(BonesFindingType.Dislocation))]
		MedialB1 = 3,

		[RadioReportId("anc_m_040591", InstanceName = nameof(BonesFindingType.Dislocation))]
		PartialLateralB2 = 4,

		[RadioReportId("anc_m_040592", InstanceName = nameof(BonesFindingType.Dislocation))]
		TotalLateralB2 = 5,

		[RadioReportId("anc_m_040593", InstanceName = nameof(BonesFindingType.Dislocation))]
		PartialC1 = 6,

		[RadioReportId("anc_m_040594", InstanceName = nameof(BonesFindingType.Dislocation))]
		CompleteC2 = 7
    }
}
