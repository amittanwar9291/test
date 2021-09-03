using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum ChondropathyIntensityType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100356", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		Superficially = 1,

		[RadioReportId("pel_m_100357", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		TotalCartilageThickness = 2
	}
}
