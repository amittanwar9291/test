using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum ArticularSurfacesType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0403310", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		Unipolar = 1,

		[RadioReportId("anc_m_0403311", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		Bipolar = 2

	}
}
