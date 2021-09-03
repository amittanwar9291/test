using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DetectionDissekatType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040375", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		NonDisplaced = 1,

		[RadioReportId("anc_m_040376", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
		Displaced = 2
    }
}
