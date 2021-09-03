using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum DifferentialDiagnosisTStadiumType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080365", InstanceName = nameof(RectumFindingType.SigmaMass))]
		T1 = 1,

		[RadioReportId("pel_m_080366", InstanceName = nameof(RectumFindingType.SigmaMass))]
		T2 = 2,

		[RadioReportId("pel_m_080367", InstanceName = nameof(RectumFindingType.SigmaMass))]
		T3 = 3,

		[RadioReportId("pel_m_080368", InstanceName = nameof(RectumFindingType.SigmaMass))]
		T4 = 4,

		[RadioReportId("pel_m_080369", InstanceName = nameof(RectumFindingType.SigmaMass))]
		TX = 5
	}
}
