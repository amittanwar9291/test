using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum FractureFormScaphoideumType : byte
	{
		None = 0,

		[RadioReportId("han_m_040435", InstanceName = nameof(BonesFindingType.Fracture))]
		ProximalPole = 1,

		[RadioReportId("han_m_040436", InstanceName = nameof(BonesFindingType.Fracture))]
		Waist = 2,

		[RadioReportId("han_m_040437", InstanceName = nameof(BonesFindingType.Fracture))]
        DistalPole = 3,
    }
}
