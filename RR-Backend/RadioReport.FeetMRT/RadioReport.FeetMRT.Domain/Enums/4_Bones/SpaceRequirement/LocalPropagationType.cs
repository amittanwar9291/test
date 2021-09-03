using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum LocalPropagationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0405214", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Intracompartimental = 1,

		[RadioReportId("anc_m_0405215", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Extracompartimental = 2
	}
}
