using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum FractureFormSubType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040502", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleFracture43A1))]
		SpiralFracture43A11 = 1,

		[RadioReportId("anc_m_040503", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleFracture43A1))]
		ObliqueFracture43A12 = 2,

		[RadioReportId("anc_m_040504", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleFracture43A1))]
		TransverseFracture43A13 = 3,

		[RadioReportId("anc_m_040505", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeFracture43A2))]
		PosterolateralImpactionFracture43A21 = 4,

		[RadioReportId("anc_m_040506", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeFracture43A2))]
		AnteromedialWedgeFracture43A22 = 5,

		[RadioReportId("anc_m_040507", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeFracture43A2))]
		FractureExtendingIntoDiaphysis43A23 = 6,

		[RadioReportId("anc_m_040508", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultifragmentaryFracture43A3))]
		IntermediateFragments43A31 = 7,

		[RadioReportId("anc_m_040509", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultifragmentaryFracture43A3))]
		IntermediateFragments43A32 = 8,

		[RadioReportId("anc_m_040510", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultifragmentaryFracture43A3))]
		ExtendingIntoDiaphysis43A33 = 9,

		[RadioReportId("anc_m_040511", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SplitFracture43B1))]
		FrontalCoronalFracture43B11 = 10,

		[RadioReportId("anc_m_040514", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SplitFracture43B1))]
		SagittalFracture43B12 = 11,

		[RadioReportId("anc_m_040517", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SplitFracture43B1))]
		FragmentaryMetaphyseal43B13 = 12,

		[RadioReportId("anc_m_040518", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SplitDepressionFracture43B2))]
		FrontalCoronalFracture43B21 = 13,

		[RadioReportId("anc_m_040521", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SplitDepressionFracture43B2))]
		Sagittal43B22 = 14,

		[RadioReportId("anc_m_040524", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SplitDepressionFracture43B2))]
		CentralFragmentFracture43B33 = 15,

		[RadioReportId("anc_m_040525", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultiFragmentaryImpression43B3))]
		FrontalCoronalFracture43B31 = 16,

		[RadioReportId("anc_m_040528", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultiFragmentaryImpression43B3))]
		Sagittal43B32 = 17,

		[RadioReportId("anc_m_040531", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultiFragmentaryImpression43B3))]
        FragmentaryMetaphysealFracture43B33 = 18,

		[RadioReportId("anc_m_0405310", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularSimpleMetaphysealFracture43C1))] 
		WithoutImpaction43C11 = 19,

		[RadioReportId("anc_m_0405313", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularSimpleMetaphysealFracture43C1))]
		WithImpression43C12 = 20,

		[RadioReportId("anc_m_0405314", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularSimpleMetaphysealFracture43C1))]
		ReachingIntoTheDiaphysis43C13 = 21,

		[RadioReportId("anc_m_0405315", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularMultifragmentaryMetaphysealFracture43C2))]
		WithAsymmetricImpaction43C21 = 22,

		[RadioReportId("anc_m_0405318", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularMultifragmentaryMetaphysealFracture43C2))]
		WithoutAsymmetricImpaction43C22 = 23,

		[RadioReportId("anc_m_0405319", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularMultifragmentaryMetaphysealFracture43C2))]
		ExtendingIntoDiaphysis43C23 = 24,

		[RadioReportId("anc_m_040533", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultifragmentaryArticularAndMetaphysealFracture43C3))]
		EpiphysealFracture43C31 = 25,

		[RadioReportId("anc_m_040534", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultifragmentaryArticularAndMetaphysealFracture43C3))]
		EpiphysealMetaphysealFracture43C32 = 26,

		[RadioReportId("anc_m_040535", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.MultifragmentaryArticularAndMetaphysealFracture43C3))]
		EpiphysealMetaphysealDiaphysealFracture43C33 = 27,

		[RadioReportId("anc_m_040536", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedLesionOf44A1))]
		RuptureOfTheLateralCollateralLigament44A11 = 28,

		[RadioReportId("anc_m_040537", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedLesionOf44A1))]
		AvulsionFractureOfTheTipOfTheLateralMalleolus44A12 = 29,

		[RadioReportId("anc_m_040538", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedLesionOf44A1))]
		TransverseFractureOfTheLateralMalleolus44A13 = 30,

		[RadioReportId("anc_m_040539", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialMalleolarFracture44A2))]
		WithRuptureOfTheLateralCollateralLigament44A21 = 31,

		[RadioReportId("anc_m_040540", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialMalleolarFracture44A2))]
		WithAvulsionFractureOfTheTipOfTheLatMalleolus44A22 = 32,

		[RadioReportId("anc_m_040541", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialMalleolarFracture44A2))]
		WithTransverseFractureOfTheLateralMalleolus44A23 = 33,

		[RadioReportId("anc_m_040542", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithPosteromedialFracture44A3))]
		RuptureOfTheLateralCollateralLigamentWithPosteromedialFracture44A31 = 34,

		[RadioReportId("anc_m_040543", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithPosteromedialFracture44A3))]
		AvulsionFractureOfTheTipOfTheLateralMalleolusWithPosteromedialFracture44A32 = 35,

		[RadioReportId("anc_m_040544", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithPosteromedialFracture44A3))]
		TransverseFractureOfTheMalleolusLateralisWithPosteromedialFracture44A33 = 36,

		[RadioReportId("anc_m_0405320", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedFibulaFracture44B1))]
		SimpleFibulaFracture44B11 = 37,

		[RadioReportId("anc_m_0405321", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedFibulaFracture44B1))]
		WithRuptureOfTheAnteriorSyndesmosis44B12 = 38,

		[RadioReportId("anc_m_0405322", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedFibulaFracture44B1))]
		WedgeMultifragmentaryFibulaFracture44B13 = 39,

		[RadioReportId("anc_m_040545", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjury44B2))]
		SimpleWithRupture44B21 = 40,

		[RadioReportId("anc_m_040546", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjury44B2))]
		SimpleWithFracture44B22 = 41,

		[RadioReportId("anc_m_040550", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjury44B2))]
		Multifragment44B23 = 42,

		[RadioReportId("anc_m_0405338", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3))]
		SimpleFractureOfFibulaWithDeltoidLigamentRupture44B31 = 43,

		[RadioReportId("anc_m_0405339", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3))]
		SimpleMedialMalleolusFracture44B32 = 44,

		[RadioReportId("anc_m_0405340", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3))]
		WedgeOrMultifragmentaryFibularFractureWithFractureOfTheMedialMalleolus44B33 = 45,

        [RadioReportId("anc_m_040557", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleDiaphysealFibulaFracture44C1))]
		WithRuptureOfTheDeltoidLigament44C11 = 46,

		[RadioReportId("anc_m_040558", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleDiaphysealFibulaFracture44C1))]
		WithFractureOfTheMedialMalleolus44C12 = 47,

		[RadioReportId("anc_m_040559", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleDiaphysealFibulaFracture44C1))]
		WithMedialAndPosteriorMalleolusFracture44C13 = 48,

		[RadioReportId("anc_m_040561", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeMultifragmentaryDiaphysealFibulaFracture44C2))]
		WithRuptureOfTheDeltoidLigament44C21 = 49,

		[RadioReportId("anc_m_040562", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeMultifragmentaryDiaphysealFibulaFracture44C2))]
		WithFractureOfTheMedialMalleolus44C22 = 50,

		[RadioReportId("anc_m_040563", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WedgeMultifragmentaryDiaphysealFibulaFracture44C2))]
        WithFractureOfTheMedialMalleolus44C23 = 51,

		[RadioReportId("anc_m_040564", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.ProximalFibulaInjury44C3))]
		WithMedialSideInjury44C31 = 52,

		[RadioReportId("anc_m_040565", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.ProximalFibulaInjury44C3))]
		WithShorteningAndMedialSideInjury44C32 = 53,

		[RadioReportId("anc_m_040566", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.ProximalFibulaInjury44C3))]
		WithMedialSideInjuryAndPosteriorMalleolusFracture44C33 = 54,

		[RadioReportId("anc_m_040571", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.Avulsion811A))]
		AnteriorNeck811A1 = 55,

		[RadioReportId("anc_m_040572", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.Avulsion811A))]
		LateralProcess811A2 = 56,

		[RadioReportId("anc_m_040573", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.Avulsion811A))]
		PosteriorProcess811A3 = 57,

		[RadioReportId("anc_m_040574", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.PartialArticular811B))]
		OsteochondralFracture811B1 = 58,

		[RadioReportId("anc_m_040575", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.PartialArticular811B))]
		SimpleFracture811B2 = 59,

		[RadioReportId("anc_m_040576", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.PartialArticular811B))]
		FragmentaryFracture811B3 = 60,

		[RadioReportId("anc_m_040577", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.CompleteArticular811C))]
		SimpleFracture811C1 = 61,

		[RadioReportId("anc_m_040578", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.CompleteArticular811C))]
		MultipleFracture811C3 = 62,

		[RadioReportId("anc_m_040579", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.FractureOfTheNeck812))]
		NeckSimpleA = 63,

		[RadioReportId("anc_m_040580", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.FractureOfTheNeck812))]
		NeckMultifragmentaryB = 64,

		[RadioReportId("anc_m_0405348", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.HeadFracture813))]
		SimpleA = 65,

		[RadioReportId("anc_m_0405349", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureClassificationType.HeadFracture813))]
		MultifragmentaryB = 66,
		
		[RadioReportId("anc_m_0405350", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalDistal)]
		ProximalDistalSimpleA = 67,

		[RadioReportId("anc_m_0405351", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalDistal)]
        ProximalDistalMultifragmentaryB = 68
    }
}
