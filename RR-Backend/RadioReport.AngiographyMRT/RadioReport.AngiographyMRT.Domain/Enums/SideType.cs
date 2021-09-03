using RadioReport.AngiographyMRT.Domain.Enums.Abdomen;
using RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyMRT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums
{
    public enum SideType : byte
	{
		None = 0,

        [RadioReportId("ang_m_040217", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040217", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040217", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040217", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050204", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_m_070203", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070203", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        [RadioReportId("ang_m_080203", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        [RadioReportId("ang_m_080307", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PelvisLegArteries.PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080312", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac))]
        [RadioReportId("ang_m_080321", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal))]
        [RadioReportId("ang_m_080329", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal))]
        [RadioReportId("ang_m_080213", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        [RadioReportId("ang_m_080218", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_m_080369", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Right = 1,

        [RadioReportId("ang_m_040218", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040218", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040218", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040218", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050205", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        [RadioReportId("ang_m_070204", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070204", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        [RadioReportId("ang_m_080204", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        [RadioReportId("ang_m_080308", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PelvisLegArteries.PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080313", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac))]
        [RadioReportId("ang_m_080322", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal))]
        [RadioReportId("ang_m_080330", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal))]
        [RadioReportId("ang_m_080214", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        [RadioReportId("ang_m_080219", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_m_080370", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Left = 2
	}
}
