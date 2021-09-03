using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum UrethraType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050233", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		MembranousUrethra = 1,

		[RadioReportId("pel_m_050234", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		SpongyUrethra = 2,

		[RadioReportId("pel_m_050235", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		ExternalOstium = 3

	}
}
