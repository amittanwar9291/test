using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum FractureTypeType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040404", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Extraarticular43A))]
		SimpleFracture43A1 = 1,

		[RadioReportId("anc_m_040405", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Extraarticular43A))]
		WedgeFracture43A2 = 2,

		[RadioReportId("anc_m_040406", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Extraarticular43A))]
		MultifragmentaryFracture43A3 = 3,

		[RadioReportId("anc_m_040408", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.PartiallyArticular43B))]
		SplitFracture43B1 = 4,

		[RadioReportId("anc_m_040409", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.PartiallyArticular43B))]
		SplitDepressionFracture43B2 = 5,

		[RadioReportId("anc_m_040410", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.PartiallyArticular43B))]
		MultiFragmentaryImpression43B3 = 6,

		[RadioReportId("anc_m_040411", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Articular43C))]
		SimpleArticularSimpleMetaphysealFracture43C1 = 7,

		[RadioReportId("anc_m_040412", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Articular43C))]
		SimpleArticularMultifragmentaryMetaphysealFracture43C2 = 8,

		[RadioReportId("anc_m_040413", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Articular43C))]
		MultifragmentaryArticularAndMetaphysealFracture43C3 = 9,

		[RadioReportId("anc_m_040416", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.InfrasyndesmoticFibulaInjury44A))]
		IsolatedLesionOf44A1 = 10,

		[RadioReportId("anc_m_040417", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.InfrasyndesmoticFibulaInjury44A))]
		WithMedialMalleolarFracture44A2 = 11,

		[RadioReportId("anc_m_040418", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.InfrasyndesmoticFibulaInjury44A))]
		WithPosteromedialFracture44A3 = 12,

		[RadioReportId("anc_m_040419", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.TranssyndesmoticFibula44B))]
		IsolatedFibulaFracture44B1 = 13,

		[RadioReportId("anc_m_040420", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.TranssyndesmoticFibula44B))]
		WithMedialInjury44B2 = 14,

		[RadioReportId("anc_m_040421", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.TranssyndesmoticFibula44B))]
		WithMedialInjuryAndFxOfThePosterolateralRim44B3 = 15,

		[RadioReportId("anc_m_040422", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.SuprasyndesmoticFibula44C))]
		SimpleDiaphysealFibulaFracture44C1 = 16,

		[RadioReportId("anc_m_040423", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.SuprasyndesmoticFibula44C))]
		WedgeMultifragmentaryDiaphysealFibulaFracture44C2 = 17,

		[RadioReportId("anc_m_040424", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.SuprasyndesmoticFibula44C))]
		ProximalFibulaInjury44C3 = 18,

		[RadioReportId("anc_m_040425", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.BodyFracture811))]
		Avulsion811A = 19,

		[RadioReportId("anc_m_040426", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.BodyFracture811))]
		PartialArticular811B = 20,

		[RadioReportId("anc_m_040427", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.BodyFracture811))]
		CompleteArticular811C = 21,

		[RadioReportId("anc_m_040428", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.FractureOfTheNeck812))]
		NondisplacedHawkings812A = 22,

		[RadioReportId("anc_m_040429", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.FractureOfTheNeck812))]
		DisplacedWithSubluxation812B = 23,

		[RadioReportId("anc_m_040430", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.FractureOfTheNeck812))]
		DisplacedTalarNeckWithTalarBodyDislocationHawkings3812C = 24,

		[RadioReportId("anc_m_040431", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.FractureOfTheNeck812))]
		DisplacedTalarNeckWithTalarBodyAndHeadDislocationHawkings4812D = 25,

		[RadioReportId("anc_m_040432", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.HeadFracture813))]
		Avulsion813A = 26,

		[RadioReportId("anc_m_040433", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.HeadFracture813))]
		PartialArticular813B = 27,

		[RadioReportId("anc_m_040434", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.HeadFracture813))]
		CompleteArticular813C = 28,

		[RadioReportId("anc_m_040435", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ExtraArticular82A))]
		AvulsionPosteriorTuberosityFractureOrExtraarticularTongueFracture82A1 = 29,

		[RadioReportId("anc_m_040436", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ExtraArticular82A))]
		BodyFracture82A2 = 30,

		[RadioReportId("anc_m_040437", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.TongueTypeFractureExitingIntoPosteriorFacet82B))]
		TongueTypeSimple82B1 = 31,

		[RadioReportId("anc_m_040439", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.TongueTypeFractureExitingIntoPosteriorFacet82B))]
		Multifragmentary82B3 = 32,

		[RadioReportId("anc_m_040440", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.IntraArticularFractureJoint82C))]
		WithJointDepressionSanders282C1 = 33,

		[RadioReportId("anc_m_040441", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.IntraArticularFractureJoint82C))]
		WithJointDepressionSanders382C2 = 34,

		[RadioReportId("anc_m_040442", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.IntraArticularFractureJoint82C))]
		MultifragmentaryFractureSanders482C3 = 35,

		[RadioReportId("anc_m_040443", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
		OsNaviculareSimpleA = 36,

		[RadioReportId("anc_m_040444", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
		OsNaviculareMultifragmentaryB = 37,

		[RadioReportId("anc_m_0404200", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
		OsCuboideumSimpleA = 38,

		[RadioReportId("anc_m_0404201", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
		OsCuboideumMultifragmentaryB = 39,

		[RadioReportId("anc_m_040445", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Medial851))]
		Avulsion851A = 40,

		[RadioReportId("anc_m_040446", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Medial851))]
		PartialArticular851B = 41,

		[RadioReportId("anc_m_040447", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Medial851))]
		CompleteArticular851C = 42,

		[RadioReportId("anc_m_0404308", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Middle852))]
		Avulsion852A = 43,

		[RadioReportId("anc_m_0404309", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Middle852))]
		PartialArticular852B = 44,

		[RadioReportId("anc_m_0404310", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Middle852))]
		CompleteArticular852C = 45,

		[RadioReportId("anc_m_0404311", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Lateral853))]
		Avulsion853A = 46,

		[RadioReportId("anc_m_0404312", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Lateral853))]
		PartialArticular853B = 47,

		[RadioReportId("anc_m_0404313", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Lateral853))]
		CompleteArticular853C = 48,

		[RadioReportId("anc_m_040454", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ProximalEndSegment871))]
        ExtraArticular871A = 49,

		[RadioReportId("anc_m_040455", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ProximalEndSegment871))]
        PartialIntraArticular871B = 50,

        [RadioReportId("anc_m_040456", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ProximalEndSegment871))]
		CompleteArticular871C = 51,

        [RadioReportId("anc_m_040457", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Diaphyseal872))]
        Simple872A = 52,

        [RadioReportId("anc_m_040458", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Diaphyseal872))]
        Wedge872B = 53,

        [RadioReportId("anc_m_040459", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Diaphyseal872))]
		MultipleFracture872C = 54,

        [RadioReportId("anc_m_040460", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.DistalEndSegment873))]
		ExtraArticular873A = 55,

        [RadioReportId("anc_m_040461", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.DistalEndSegment873))]
		PartialIntraArticular873B = 56,

        [RadioReportId("anc_m_040462", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.DistalEndSegment873))]
		CompleteArticular873C = 57,

        [RadioReportId("anc_m_040463", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ProximalEndSegment881))]
		ExtraArticular881A = 58,

        [RadioReportId("anc_m_040464", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ProximalEndSegment881))]
		PartialIntraArticular881B = 59,

        [RadioReportId("anc_m_040465", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.ProximalEndSegment881))]
		CompleteArticular881C = 60,

        [RadioReportId("anc_m_040466", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Diaphyseal882))]
		Simple882A = 61,

        [RadioReportId("anc_m_040467", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Diaphyseal882))]
		Wedge882B = 62,

        [RadioReportId("anc_m_040468", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.Diaphyseal882))]
		Multifragmentary882C = 63,

        [RadioReportId("anc_m_040469", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.DistalEndSegment883))]
		ExtraArticular883A = 64,

        [RadioReportId("anc_m_040470", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.DistalEndSegment883))]
		PartialIntraArticular883B = 65,

        [RadioReportId("anc_m_040471", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.DistalEndSegment883))]
		CompleteArticular883C = 66,
    }
}
