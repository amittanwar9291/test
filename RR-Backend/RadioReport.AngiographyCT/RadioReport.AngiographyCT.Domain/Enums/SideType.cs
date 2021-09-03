using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums.Abdomen;
using RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries;
using RadioReport.AngiographyCT.Domain.Enums.SoftTissue;
using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080203", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080203", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        [RadioReportId("ang_c_050217", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050220", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050225", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050238", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_020336", InstanceName = InstanceNames.Anamnesis + nameof(PriorInterventionsFinding.OriginCruralSideType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020432", InstanceName = InstanceNames.Anamnesis + nameof(PriorInterventionsFinding.TargetVesselCruralSideType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_090203", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        [RadioReportId("ang_c_090307", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteries.ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090312", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        [RadioReportId("ang_c_090321", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        [RadioReportId("ang_c_090329", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        [RadioReportId("ang_c_090213", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        [RadioReportId("ang_c_090218", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902108", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        [RadioReportId("ang_c_060204", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_100338", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(ThoracicType.Pneumothorax))]
        [RadioReportId("ang_c_100343", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(ThoracicType.Atelectasis))]
        [RadioReportId("ang_c_100361", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(SoftTissueFindingType.Thoracic) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100372", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(SoftTissueFindingType.Thoracic) + nameof(ThoracicType.Fracture))]
        [RadioReportId("ang_c_100455", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = "AdrenalGlandsKidneysOvaries")]
        [RadioReportId("ang_c_100458", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(AbdominalLocalizationType.Retroperitoneum))]
        [RadioReportId("ang_c_1003100", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = "not" + nameof(ExtremitiesMassLocalizationType.Pelvis))]
        [RadioReportId("ang_c_1003103", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(ExtremitiesMassLocalizationType.Pelvis))]
        [RadioReportId("ang_c_100479", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(SoftTissueFindingType.Extremities) + nameof(ExtremitiesType.Fracture))]
        Right = 1,

        [RadioReportId("ang_c_080204", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080204", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        [RadioReportId("ang_c_050218", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050221", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050226", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050239", InstanceName = InstanceNames.SupraaorticVessels, CustomConditionName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_020337", InstanceName = InstanceNames.Anamnesis + nameof(PriorInterventionsFinding.OriginCruralSideType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_020433", InstanceName = InstanceNames.Anamnesis + nameof(PriorInterventionsFinding.TargetVesselCruralSideType), CustomConditionName = nameof(PriorInterventionsFindingType.Bypass))]
        [RadioReportId("ang_c_090204", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        [RadioReportId("ang_c_090308", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteries.ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090313", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions))]
        [RadioReportId("ang_c_090322", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions))]
        [RadioReportId("ang_c_090330", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions))]
        [RadioReportId("ang_c_090214", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        [RadioReportId("ang_c_090219", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902109", InstanceName = InstanceNames.PelvisLegArteries, CustomConditionName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        [RadioReportId("ang_c_060205", InstanceName = InstanceNames.UpperArteries)]
        [RadioReportId("ang_c_100339", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(ThoracicType.Pneumothorax))]
        [RadioReportId("ang_c_100344", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(ThoracicType.Atelectasis))]
        [RadioReportId("ang_c_100362", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(SoftTissueFindingType.Thoracic) + nameof(ThoracicType.Mass))]
        [RadioReportId("ang_c_100373", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(SoftTissueFindingType.Thoracic) + nameof(ThoracicType.Fracture))]
        [RadioReportId("ang_c_100456", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = "AdrenalGlandsKidneysOvaries")]
        [RadioReportId("ang_c_100459", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(AbdominalLocalizationType.Retroperitoneum))]
        [RadioReportId("ang_c_1003101", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = "not" + nameof(ExtremitiesMassLocalizationType.Pelvis))]
        [RadioReportId("ang_c_1003104", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(ExtremitiesMassLocalizationType.Pelvis))]
        [RadioReportId("ang_c_100480", InstanceName = InstanceNames.SoftTissue,
            CustomConditionName = nameof(SoftTissueFindingType.Extremities) + nameof(ExtremitiesType.Fracture))]
        Left = 2,

        [RadioReportId("ang_c_100363", InstanceName = InstanceNames.SoftTissue)]
        Median = 3
    }
}
