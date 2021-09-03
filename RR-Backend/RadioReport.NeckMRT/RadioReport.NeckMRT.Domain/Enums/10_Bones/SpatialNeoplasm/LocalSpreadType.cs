using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum LocalSpreadType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100377", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Intracompartmental = 1,

		[RadioReportId("nec_m_100378", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
		Extracompartmental = 2

	}
}
