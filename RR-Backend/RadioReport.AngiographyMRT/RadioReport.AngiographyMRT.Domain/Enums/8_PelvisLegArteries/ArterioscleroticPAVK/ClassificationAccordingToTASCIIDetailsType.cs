using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum ClassificationAccordingToTASCIIDetailsType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080422", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeA))]
        [RadioReportId("ang_m_080424", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeB))]
        ShortStenosisLessThan3Cm = 1,

		[RadioReportId("ang_m_080423", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UniOrBilateralStenosisLessThan3Cm = 2,

		[RadioReportId("ang_m_080425", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeB))]
        [RadioReportId("ang_m_080434", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeD))]
        UnilateralOcclusion = 3,

		[RadioReportId("ang_m_080426", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UnilateralStenosisTotalingFrom3To10Cm = 4,

		[RadioReportId("ang_m_080427", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeC))]
        [RadioReportId("ang_m_080512", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeD))]
        BilateralOcclusions = 5,

		[RadioReportId("ang_m_080428", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        BilateralStenosesFrom3To10CmLong = 6,

		[RadioReportId("ang_m_080429", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        UnilateralStenosis = 7,

		[RadioReportId("ang_m_080430", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        HeavenlyCalcifiedUnilateralOcclusion = 8,

		[RadioReportId("ang_m_080431", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        InfrarenalAortoiliacOcclusion = 9,

		[RadioReportId("ang_m_080432", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        DiffuseDisease = 10,

		[RadioReportId("ang_m_080433", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        DiffuseMultipleStenoses = 11,

		[RadioReportId("ang_m_080513", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        IliacStenosisInPatients = 12,

		[RadioReportId("ang_m_080514", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        LesionsThatRequireOpenSurgery = 13,

		[RadioReportId("ang_m_080447", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MultipleStenosesAndOcclusionsLessThan5Cm = 14,

		[RadioReportId("ang_m_080448", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularStenosisOrOcclusionLessThan15Cm = 15,

		[RadioReportId("ang_m_080449", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingleOrMultipleLesions = 16,

		[RadioReportId("ang_m_080450", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OcclusionLessThan5Cm = 17,

		[RadioReportId("ang_m_080451", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        SingularStenosis = 18,

		[RadioReportId("ang_m_080453", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MultipleStenosesOrOcclusionsMoreThan15Cm = 19,

		[RadioReportId("ang_m_080454", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        RecurrentStenosis = 20,

		[RadioReportId("ang_m_080456", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicOcclusionMoreThan20Cm = 21,

		[RadioReportId("ang_m_080457", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicOcclusionAndProximalTrifurcation = 22,

        [RadioReportId("ang_m_080460", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MultipleStenosesLessThan1Cm = 23,

        [RadioReportId("ang_m_080461", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OneOrTwoStenosesLessThan1Cm = 24,

        [RadioReportId("ang_m_080462", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        StenosisFrom1To4CmLength = 25,

        [RadioReportId("ang_m_080463", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OcclusionFrom1To2CmLength = 26,

        [RadioReportId("ang_m_080464", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        HighGradeAndLongDistanceTrifurcationStenosis = 27,

        [RadioReportId("ang_m_080465", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        OcclusionMoreThan2Cm = 28,

        [RadioReportId("ang_m_080466", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        MultipleAndLongDistanceStenoses = 29
	}
}
