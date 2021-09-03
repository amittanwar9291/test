using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum LocalExtensionType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0405165", InstanceName = nameof(BonesFindingType.Mass))]
        Intracompartimental = 1,

		[RadioReportId("elb_m_0405166", InstanceName = nameof(BonesFindingType.Mass))]
        Extracompartment = 2
	}
}
