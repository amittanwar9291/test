using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum EtiologyType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050311", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		Traumatic = 1,

		[RadioReportId("elb_m_050312", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		Degenerative = 2
	}
}
