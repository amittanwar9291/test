using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Cartilage
{
	public enum OuterbridgeClassificationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_050420", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		GradeI = 1,

		[RadioReportId("elb_m_050421", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		GradeII = 2,

		[RadioReportId("elb_m_050422", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		GradeIII = 3,

		[RadioReportId("elb_m_050423", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		GradeIV = 4
	}
}
