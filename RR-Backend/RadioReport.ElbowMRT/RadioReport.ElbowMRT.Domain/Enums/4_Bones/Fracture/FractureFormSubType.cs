using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum FractureFormSubType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0405100", InstanceName = nameof(BonesFindingType.Fracture))]
		LateralEpicondyle = 1,

		[RadioReportId("elb_m_0405101", InstanceName = nameof(BonesFindingType.Fracture))]
		MedialEpcondyle = 2,

		[RadioReportId("elb_m_0405102", InstanceName = nameof(BonesFindingType.Fracture))]
		SpiralFracture = 3,

		[RadioReportId("elb_m_0405103", InstanceName = nameof(BonesFindingType.Fracture))]
		ObliqueFracture = 4,

		[RadioReportId("elb_m_0405104", InstanceName = nameof(BonesFindingType.Fracture))]
		TransverseFracture = 5,

        [RadioReportId("elb_m_0405105", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.MultifragmentaryExtraarticularFx))]
        [RadioReportId("elb_m_0405115", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.SimpleArticularWedgeOrMultifragmentary))]
		WithAnIntactSupracondylarWedge = 6,

        [RadioReportId("elb_m_0405106", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.MultifragmentaryExtraarticularFx))]
        [RadioReportId("elb_m_0405116", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.SimpleArticularWedgeOrMultifragmentary))]
		WithAFragmentedSupracondylarWedge = 7,

        [RadioReportId("elb_m_0405107", InstanceName = nameof(BonesFindingType.Fracture))]
		ComminutedFractureMetaphyseal = 8,

        [RadioReportId("elb_m_040525", InstanceName = nameof(BonesFindingType.Fracture))]
		Transtrochlear = 9,
        
        [RadioReportId("elb_m_040526", InstanceName = nameof(BonesFindingType.Fracture))]
        CapitulumHumeri = 10,

		[RadioReportId("elb_m_040527", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.LateralSagittalFracture))]
        [RadioReportId("elb_m_0405112", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.MedialSagittalFracture))]
		FragmentedTranstrochlearFracture = 11,

        [RadioReportId("elb_m_0405110", InstanceName = nameof(BonesFindingType.Fracture))]
		TranstrochlearSimpleThroughTrochlearSulcus = 12,

        [RadioReportId("elb_m_0405111", InstanceName = nameof(BonesFindingType.Fracture))]
		TranstrochlearSimpleThroughMedialArticularSurface = 13,

        [RadioReportId("elb_m_0405150", InstanceName = nameof(BonesFindingType.Fracture))]
		Capitulum = 14,

		[RadioReportId("elb_m_0405151", InstanceName = nameof(BonesFindingType.Fracture))]
        Trochlea = 15,

		[RadioReportId("elb_m_0405152", InstanceName = nameof(BonesFindingType.Fracture))]
		CapitulumAndTrochlea = 16,

		[RadioReportId("elb_m_0405113", InstanceName = nameof(BonesFindingType.Fracture))]
		AboveTheTranscondylarAxis = 17,

		[RadioReportId("elb_m_0405114", InstanceName = nameof(BonesFindingType.Fracture))]
		BelowOrThroughTranscondylarAxis = 18,
        
		[RadioReportId("elb_m_0405117", InstanceName = nameof(BonesFindingType.Fracture))]
        ComplexMultifragmentary = 19,

		[RadioReportId("elb_m_0405121", InstanceName = nameof(BonesFindingType.Fracture))]
		MetaphysealSimple = 20,

		[RadioReportId("elb_m_0405124", InstanceName = nameof(BonesFindingType.Fracture))]
		WithMetaphysealFractureWedge = 21,

		[RadioReportId("elb_m_0405129", InstanceName = nameof(BonesFindingType.Fracture))]
		MetaphysealComplexOrMultiFragmentary = 22
    }
}
