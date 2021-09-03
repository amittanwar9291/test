using RadioReport.Common.Logic.Attributes;
using System;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    [Flags]
	public enum HomogenityTypes : byte
	{
		None = 0,

		[RadioReportId("pel_m_040314")]
		Homogeneous = 1,

		[RadioReportId("pel_m_040315")]
		Heterogeneous = 2

	}
}
