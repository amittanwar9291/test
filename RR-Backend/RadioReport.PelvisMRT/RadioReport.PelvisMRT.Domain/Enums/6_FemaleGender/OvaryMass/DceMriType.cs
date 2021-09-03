using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
	public enum DceMriType : byte
	{
		None = 0,

		[RadioReportId("pel_m_060314", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
		CurveTypeI = 1,

		[RadioReportId("pel_m_060315", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
		CurveTypeII = 2,

		[RadioReportId("pel_m_060316", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
		CurveTypeIII = 3
    }
}
