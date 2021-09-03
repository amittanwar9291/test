using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum DifferentialDiagnosisTraumaType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050302", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		PenileFracture = 1,

		[RadioReportId("pel_m_050303", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		PenileContusion = 2

	}
}
