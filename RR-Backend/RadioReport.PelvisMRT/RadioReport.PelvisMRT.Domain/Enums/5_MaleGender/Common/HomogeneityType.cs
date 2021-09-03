using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum HomogeneityType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050424", InstanceName = nameof(MaleGenderFinding.PenisMassHomogeneity01Type), CustomConditionName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050331", InstanceName = nameof(MaleGenderFinding.PenisMassHomogeneity02Type))]
		[RadioReportId("pel_m_050424", InstanceName = nameof(MaleGenderFinding.ScrotumMassHomogeneity01Type), CustomConditionName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_050456", InstanceName = nameof(MaleGenderFinding.ScrotumMassHomogeneity02Type))]
		[RadioReportId("pel_m_050533", InstanceName = nameof(MaleGenderFinding.HomogeneitySeminalVesiclesMassType))]
		Homogeneous = 1,

		[RadioReportId("pel_m_050425", InstanceName = nameof(MaleGenderFinding.PenisMassHomogeneity01Type), CustomConditionName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050332", InstanceName = nameof(MaleGenderFinding.PenisMassHomogeneity02Type))]
		[RadioReportId("pel_m_050425", InstanceName = nameof(MaleGenderFinding.ScrotumMassHomogeneity01Type), CustomConditionName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_050457", InstanceName = nameof(MaleGenderFinding.ScrotumMassHomogeneity02Type))]
		[RadioReportId("pel_m_050534", InstanceName = nameof(MaleGenderFinding.HomogeneitySeminalVesiclesMassType))]
		Heterogeneous = 2

	}
}
