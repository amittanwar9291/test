using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum LocalizationOfTheNondescendedType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050340", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		Intraabdominal = 1,

		[RadioReportId("pel_m_050341", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		Inguinoscrotal = 2,

		[RadioReportId("pel_m_050342", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		NotDetectable = 3

	}
}
