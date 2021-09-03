using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum DegreeType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040229", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        Superficial = 1,

		[RadioReportId("hip_m_040230", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        FullCartilageThickness = 2
	}
}
