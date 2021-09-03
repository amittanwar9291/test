using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormAType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100428")]
		PelvicEdgeInjuries = 1,

		[RadioReportId("pel_m_100429")]
		IliacWingFracture = 2,

		[RadioReportId("pel_m_100430")]
		TransverseFractures = 3
	}
}
