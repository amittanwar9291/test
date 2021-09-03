using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum DwiAdcSignalType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040517", InstanceName = nameof(ProstataFinding.IncreasedDwiSignalType))]
		[RadioReportId("pel_m_040522", InstanceName = nameof(ProstataFinding.AdcHypointensityType))]
		Discrete = 1,

		[RadioReportId("pel_m_040520", InstanceName = nameof(ProstataFinding.IncreasedDwiSignalType))]
		[RadioReportId("pel_m_040525", InstanceName = nameof(ProstataFinding.AdcHypointensityType))]
		Pronounced = 2

	}
}
