using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum GraduationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040303", InstanceName = nameof(BonesFindingType.Fracture))]
        NonDisplacedRadialHeadFx = 1,

		[RadioReportId("elb_m_040304", InstanceName = nameof(BonesFindingType.Fracture))]
        FxWithTranslationMoreThan2Mm = 2,

		[RadioReportId("elb_m_0403185", InstanceName = nameof(BonesFindingType.Fracture))]
        FxWithAngulationLessThan30Degrees = 3,

        [RadioReportId("elb_m_0404170", InstanceName = nameof(BonesFindingType.Fracture))]
        ComminutedFracture = 4,

		[RadioReportId("elb_m_0404171", InstanceName = nameof(BonesFindingType.Fracture))]
        FxWithAngulatioMoreThan30Degrees = 5,

		[RadioReportId("elb_m_0404173", InstanceName = nameof(BonesFindingType.Fracture))]
        FractureWithDislocation = 6
	}
}
