using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum TunicaAlbugineaType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050205", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		Discontinuity = 1,

		[RadioReportId("pel_m_050210", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		Intact = 2

	}
}
