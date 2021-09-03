using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.UpperArteries
{
	public enum DetailsVascularMalformationType : byte
	{
		None = 0,

        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050432", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        ArteriovenousMalformation = 1,

        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050435", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        Hemangioma = 2
	}
}
