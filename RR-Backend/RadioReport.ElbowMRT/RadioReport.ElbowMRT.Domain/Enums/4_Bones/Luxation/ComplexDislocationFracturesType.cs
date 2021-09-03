using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum ComplexDislocationFracturesType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040323", InstanceName = nameof(BonesFindingType.Luxation))]
		TerribleTriadOfTheElbow = 1,

		[RadioReportId("elb_m_040324", InstanceName = nameof(BonesFindingType.Luxation))]
		MonteggiaLikeLesion = 2,

		[RadioReportId("elb_m_040325", InstanceName = nameof(BonesFindingType.Luxation))]
		EssexLoprestiLesion = 3,

		[RadioReportId("elb_m_040326", InstanceName = nameof(BonesFindingType.Luxation))]
		MonteggiaFracture = 4
	}
}
