using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum FractureFormDetailsType : byte
	{
		None = 0,

		[RadioReportId("elb_m_040501", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(AoClassificationType.PartialArticular))]
		[RadioReportId("elb_m_040415", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(AoClassificationType.Articular))]
		DSimple = 1,

		[RadioReportId("elb_m_040502", InstanceName = nameof(BonesFindingType.Fracture))]
		EMultifragmentary = 2,

		[RadioReportId("elb_m_040503", InstanceName = nameof(BonesFindingType.Fracture))]
		NWithInvolvementOfTheAnteroMedialArticularFacet = 3,

		[RadioReportId("elb_m_040504", InstanceName = nameof(BonesFindingType.Fracture))]
		OAvulsionFracture = 4,

		[RadioReportId("elb_m_040505", InstanceName = nameof(BonesFindingType.Fracture))]
		PLessThan50Percent = 5,

		[RadioReportId("elb_m_040506", InstanceName = nameof(BonesFindingType.Fracture))]
		QGreaterOrEqualTo50Percent = 6,

		[RadioReportId("elb_m_040416", InstanceName = nameof(BonesFindingType.Fracture))]
		RMultifragmentaryFractureOfTheOlecranon = 7,

		[RadioReportId("elb_m_040417", InstanceName = nameof(BonesFindingType.Fracture))]
		SMultifragmentaryWithInvolvementOfCoronoidProcess = 8,

		[RadioReportId("elb_m_0405108", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.MultifragmentaryExtraarticularFx))]
        [RadioReportId("elb_m_0405118", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.SimpleArticularWedgeOrMultifragmentary))]
        [RadioReportId("elb_m_0405125", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.ArticularMultifragmentary))]
		FLateral = 9,

		[RadioReportId("elb_m_0405109", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.MultifragmentaryExtraarticularFx))]
        [RadioReportId("elb_m_0405119", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.SimpleArticularWedgeOrMultifragmentary))]
        [RadioReportId("elb_m_0405126", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.ArticularMultifragmentary))]
		HMedia = 10,

        [RadioReportId("elb_m_040519", InstanceName = nameof(BonesFindingType.Fracture))]
        QTranscapitellar = 11,

        [RadioReportId("elb_m_040520", InstanceName = nameof(BonesFindingType.Fracture))]
		RBetweenCapitulumAndTrochlea = 12,

        [RadioReportId("elb_m_0405120", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.SimpleArticularWedgeOrMultifragmentary))]
        [RadioReportId("elb_m_0405128", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormType.ArticularMultifragmentary))]
		UIntactWedge = 15,

		[RadioReportId("elb_m_0405122", InstanceName = nameof(BonesFindingType.Fracture))]
		SProximalToTheTranscodylarAxis = 16,

		[RadioReportId("elb_m_0405123", InstanceName = nameof(BonesFindingType.Fracture))]
		TDistalToTheTranscodylarAxis = 17,

		[RadioReportId("elb_m_0405127", InstanceName = nameof(BonesFindingType.Fracture))]
        LFragmented = 18
    }
}
