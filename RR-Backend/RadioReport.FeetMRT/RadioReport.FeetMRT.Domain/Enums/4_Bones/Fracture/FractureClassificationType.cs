using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum FractureClassificationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040309", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Tibia))]
		Extraarticular43A = 1,

		[RadioReportId("anc_m_040310", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Tibia))]
		PartiallyArticular43B = 2,

		[RadioReportId("anc_m_040311", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Tibia))]
		Articular43C = 3,

		[RadioReportId("anc_m_040312", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Tibia))]
		DistalTibiaFractureNotFurtherSpecified = 4,

		[RadioReportId("anc_m_040316", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Fibula))]
		SimpleFracture4F3A = 5,

		[RadioReportId("anc_m_040317", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Fibula))]
		WedgeOrMultifragmentaryFracture4F3B = 6,

		[RadioReportId("anc_m_040318", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Fibula))]
		DistalFibulaFractureNotFurtherSpecified = 7,

		[RadioReportId("anc_m_040322", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Malleoli))]
		InfrasyndesmoticFibulaInjury44A = 8,

		[RadioReportId("anc_m_040323", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Malleoli))]
		TranssyndesmoticFibula44B = 9,

		[RadioReportId("anc_m_040324", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Malleoli))]
		SuprasyndesmoticFibula44C = 10,

		[RadioReportId("anc_m_0403205", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Malleoli))]
		MalleoliFractureNotFurtherSpecified = 11,

		[RadioReportId("anc_m_040327", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Talus))]
		BodyFracture811 = 12,

		[RadioReportId("anc_m_040328", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Talus))]
		FractureOfTheNeck812 = 13,

		[RadioReportId("anc_m_040329", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Talus))]
		HeadFracture813 = 14,

		[RadioReportId("anc_m_040330", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Talus))]
		TalusFractureNotFurtherSpecified = 15,

		[RadioReportId("anc_m_040334", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Calcaneus))]
        ExtraArticular82A = 16,

        [RadioReportId("anc_m_040335", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Calcaneus))]
        TongueTypeFractureExitingIntoPosteriorFacet82B = 17,

		[RadioReportId("anc_m_040336", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Calcaneus))]
        IntraArticularFractureJoint82C = 18,
		
		[RadioReportId("anc_m_0403208", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.Calcaneus))]
		CalcaneusFractureNotFurtherSpecified = 19,

		[RadioReportId("anc_m_040338", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
		Avulsion83A = 20,

		[RadioReportId("anc_m_040339", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
		PartialArticular83B = 21,

		[RadioReportId("anc_m_040340", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
		CompleteArticular83C = 22,

		[RadioReportId("anc_m_0403211", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsNaviculare))]
		OsNaviculareFractureNotFurtherSpecified = 23,

		[RadioReportId("anc_m_0403215", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
		Avulsion84A = 24,

		[RadioReportId("anc_m_0403216", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
		PartialArticular84B = 25,

		[RadioReportId("anc_m_0403217", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
		CompleteArticular84C = 26,

		[RadioReportId("anc_m_0403218", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(ThreeDimensionalLocalizations.OsCuboideum))]
		OsCuboideumFractureNotFurtherSpecified = 27,

		[RadioReportId("anc_m_040342", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Cuneiform)]
		Medial851 = 28,

		[RadioReportId("anc_m_040343", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Cuneiform)]
		Middle852 = 29,

		[RadioReportId("anc_m_040344", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Cuneiform)]
		Lateral853 = 30,

		[RadioReportId("anc_m_0403221", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Cuneiform)]
		OsCuneiformeFractureNotFurtherSpecified = 31,

        [RadioReportId("anc_m_040346", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Metatarsale)]
		ProximalEndSegment871 = 32,

        [RadioReportId("anc_m_040347", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Metatarsale)]
		Diaphyseal872 = 33,

        [RadioReportId("anc_m_040348", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Metatarsale)]
		DistalEndSegment873 = 34,

		[RadioReportId("anc_m_0403224", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.Metatarsale)]
		OsMetatarsaleFractureNotFurtherSpecified = 35,

        [RadioReportId("anc_m_040350", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalePhalanx)]
        ProximalEndSegment881 = 36,

        [RadioReportId("anc_m_040351", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalePhalanx)]
        Diaphyseal882 = 37,

        [RadioReportId("anc_m_040352", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalePhalanx)]
        DistalEndSegment883 = 38,
		
		[RadioReportId("anc_m_0403227", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = CustomConditionNames.ProximalePhalanx)]
		ProximalePhalanxFractureNotFurtherSpecified = 39
	}
}
