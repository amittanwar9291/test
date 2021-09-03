using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum MyelonPathologyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100228", InstanceName = nameof(BonesFindingType.Myelon))]
		Myelopathy = 1,

		[RadioReportId("nec_m_100229", InstanceName = nameof(BonesFindingType.Myelon))]
		Syringohydromyelia = 2,

		[RadioReportId("nec_m_100230", InstanceName = nameof(BonesFindingType.Myelon))]
		SpinalCanalMass = 3

	}
}
