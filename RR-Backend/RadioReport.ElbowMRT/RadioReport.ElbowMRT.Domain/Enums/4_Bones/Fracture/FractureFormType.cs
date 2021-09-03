using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum FractureFormType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040402", InstanceName = nameof(BonesFindingType.Fracture))]
        TuberositasRadiiAvulsion = 1,

		[RadioReportId("elb_m_040403", InstanceName = nameof(BonesFindingType.Fracture))]
        RadiusNeckSimple = 2,

		[RadioReportId("elb_m_040404", InstanceName = nameof(BonesFindingType.Fracture))]
        RadialNeckMultifragmentary = 3,

		[RadioReportId("elb_m_040405", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(AoClassificationType.PartialArticular))]
		[RadioReportId("elb_m_040407", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(AoClassificationType.Articular))]
		Simple = 4,

		[RadioReportId("elb_m_040406", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(AoClassificationType.PartialArticular))]
		[RadioReportId("elb_m_040408", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(AoClassificationType.Articular))]
        Multifragmentary = 5,

		[RadioReportId("elb_m_040409", InstanceName = nameof(BonesFindingType.Fracture))]
		AvulsionOfTheOlecranon = 6,

		[RadioReportId("elb_m_040410", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
		MetaphysealSingle = 7,

		[RadioReportId("elb_m_040411", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.ProximalUlna))]
		MetaphysealMultifragmental = 8,

		[RadioReportId("elb_m_040412", InstanceName = nameof(BonesFindingType.Fracture))]
        OlecranonFx = 9,

		[RadioReportId("elb_m_040413", InstanceName = nameof(BonesFindingType.Fracture))]
        CoronoidProcessFx = 10,

        [RadioReportId("elb_m_040414", InstanceName = nameof(BonesFindingType.Fracture))]
        OlecranonAndCoronoidProcessFx = 11,

        [RadioReportId("elb_m_0404101", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
		[RadioReportId("elb_m_0404123", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		SpiralFracture = 12,

		[RadioReportId("elb_m_0404102", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404124", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		ObliqueFractureMoreThan30Degrees = 13,

        [RadioReportId("elb_m_0404103", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404125", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		TransverseFractureLessThan30Degrees = 14,

        [RadioReportId("elb_m_0404109", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404130", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		WithIntactWedge = 15,

        [RadioReportId("elb_m_0404110", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404131", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		WithFragmentedWedge = 16,

        [RadioReportId("elb_m_0404116", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404136", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		WithIntactIntermediateSegment = 17,

        [RadioReportId("elb_m_0404117", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealRadius))]
        [RadioReportId("elb_m_0404137", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureType.DiaphysealUlna))]
		WithFragmentedIntermediateSegment = 18,

		[RadioReportId("elb_m_040418", InstanceName = nameof(BonesFindingType.Fracture))]
		Avulsion = 19,

		[RadioReportId("elb_m_040419", InstanceName = nameof(BonesFindingType.Fracture))]
		SimpleExtraarticularFx = 20,

		[RadioReportId("elb_m_040420", InstanceName = nameof(BonesFindingType.Fracture))]
		MultifragmentaryExtraarticularFx = 21,

		[RadioReportId("elb_m_040421", InstanceName = nameof(BonesFindingType.Fracture))]
		LateralSagittalFracture = 22,

		[RadioReportId("elb_m_040422", InstanceName = nameof(BonesFindingType.Fracture))]
		MedialSagittalFracture = 23,

		[RadioReportId("elb_m_040423", InstanceName = nameof(BonesFindingType.Fracture))]
		CoronalPlaneFracture = 24,

		[RadioReportId("elb_m_040424", InstanceName = nameof(BonesFindingType.Fracture))]
		ArticularSimpleMetaphysealSimple = 25,

		[RadioReportId("elb_m_040425", InstanceName = nameof(BonesFindingType.Fracture))]
		SimpleArticularWedgeOrMultifragmentary = 26,

		[RadioReportId("elb_m_040426", InstanceName = nameof(BonesFindingType.Fracture))]
		ArticularMultifragmentary = 27
	}
}
