using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040358", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Subchondral = 1,

		[RadioReportId("anc_m_040359", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Focal = 2,

		[RadioReportId("anc_m_040360", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		Diffuse = 3,

		[RadioReportId("anc_m_040361", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		DiffuseStained = 4,

		[RadioReportId("anc_m_040362", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		SubcorticalEdemaThinSubchondralLines = 5

	}
}
