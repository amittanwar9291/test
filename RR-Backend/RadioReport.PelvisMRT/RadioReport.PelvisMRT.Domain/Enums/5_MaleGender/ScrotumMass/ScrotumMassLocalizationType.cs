using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum ScrotumMassLocalizationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_0502108", InstanceName = nameof(MaleGenderFinding.ScrotumMassLocalizationType))]
		[RadioReportId("pel_m_0502124", InstanceName = nameof(MaleGenderFinding.ScrotumMassInternalChangeLocalizationType))]
		Intratesticular = 1,

		[RadioReportId("pel_m_0502109", InstanceName = nameof(MaleGenderFinding.ScrotumMassLocalizationType))]
		[RadioReportId("pel_m_0502125", InstanceName = nameof(MaleGenderFinding.ScrotumMassInternalChangeLocalizationType))]
		Extratesticular = 2

	}
}
