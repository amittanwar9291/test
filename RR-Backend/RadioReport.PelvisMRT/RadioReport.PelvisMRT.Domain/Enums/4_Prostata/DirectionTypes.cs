using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;
using System;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    [Flags]
	public enum DirectionTypes : byte
	{
		None = 0,

		[RadioReportId("pel_m_040426", InstanceName = nameof(ProstataFinding.EjaculatoryDuctDirectionType))]
		[RadioReportId("pel_m_040435", InstanceName = nameof(ProstataFinding.SeminalVesiclesDirectionType))]
        [RadioReportId("pel_m_040528", InstanceName = nameof(ProstataFinding.NeurovascularBundleDirectionType))]
        Left = 1,

		[RadioReportId("pel_m_040425", InstanceName = nameof(ProstataFinding.EjaculatoryDuctDirectionType))]
		[RadioReportId("pel_m_040434", InstanceName = nameof(ProstataFinding.SeminalVesiclesDirectionType))]
        [RadioReportId("pel_m_040527", InstanceName = nameof(ProstataFinding.NeurovascularBundleDirectionType))]
        Right = 2

	}
}
