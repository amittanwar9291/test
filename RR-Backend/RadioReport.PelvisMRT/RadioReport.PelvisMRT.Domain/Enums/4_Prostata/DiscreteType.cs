using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum DiscreteType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040518", InstanceName = nameof(ProstataFinding.DwiDiscreteType))]
		[RadioReportId("pel_m_040523", InstanceName = nameof(ProstataFinding.AdcDiscreteType))]
		LinearTriangular = 1,

		[RadioReportId("pel_m_040519", InstanceName = nameof(ProstataFinding.DwiDiscreteType))]
		[RadioReportId("pel_m_040524", InstanceName = nameof(ProstataFinding.AdcDiscreteType))]
		Focal = 2

	}
}
