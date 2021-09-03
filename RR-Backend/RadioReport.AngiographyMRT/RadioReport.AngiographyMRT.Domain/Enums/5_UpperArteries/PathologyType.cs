using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.UpperArteries
{
    public enum PathologyType : byte
	{
		None = 0,

        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050301", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        StenosisOrOcclusion = 1,

        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050302", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050302", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050302", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050302", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050302", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        Dissection = 2,

        [RadioReportId("ang_m_0502100", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050303", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        Aneurysm = 3,

        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050304", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        VascularMalformation = 4,

        [RadioReportId("ang_m_050305", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050305", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050305", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        HemodialysisShunt = 5
    }
}
