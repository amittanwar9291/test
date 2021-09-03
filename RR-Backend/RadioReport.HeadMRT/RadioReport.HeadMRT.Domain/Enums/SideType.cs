using RadioReport.Common.Logic.Attributes;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Enums.Summary;
using RadioReport.HeadMRT.Domain.Enums.Vessels;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040356", InstanceName = nameof(VesselsFindingType.Aneurysm), CustomConditionName = nameof(LocalizationAneurysmaType.VertebralArtery))]
        [RadioReportId("hea_m_040364", InstanceName = nameof(VesselsFindingType.Aneurysm), CustomConditionName = nameof(LocalizationAneurysmaType.InternalCarotidArtery))]
        [RadioReportId("hea_m_040263", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        [RadioReportId("hea_m_080349", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_m_100310", InstanceName = InstanceNames.SellarRegion, CustomConditionName = nameof(SellarRegionFindingType.Pathology))]
        [RadioReportId("hea_m_110275", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110334", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110284", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102143", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102190", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102288", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_100310", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.SideType))]
        [RadioReportId("hea_m_100325", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.CarotidArterySideType))]
        [RadioReportId("hea_m_120355", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Right = 1,

        [RadioReportId("hea_m_040357", InstanceName = nameof(VesselsFindingType.Aneurysm), CustomConditionName = nameof(LocalizationAneurysmaType.VertebralArtery))]
        [RadioReportId("hea_m_040365", InstanceName = nameof(VesselsFindingType.Aneurysm), CustomConditionName = nameof(LocalizationAneurysmaType.InternalCarotidArtery))]
        [RadioReportId("hea_m_040264", InstanceName = nameof(VesselsFindingType.DuralAVFistula))]
        [RadioReportId("hea_m_080350", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        [RadioReportId("hea_m_100311", InstanceName = InstanceNames.SellarRegion, CustomConditionName = nameof(SellarRegionFindingType.Pathology))]
        [RadioReportId("hea_m_110276", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110335", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110285", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102144", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102191", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102289", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_100311", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.SideType))]
        [RadioReportId("hea_m_100326", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.CarotidArterySideType))]
        [RadioReportId("hea_m_120356", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Left = 2,

        [RadioReportId("hea_m_050364", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_070426", InstanceName = InstanceNames.BasalNuclei, CustomConditionName = nameof(BasalNucleiFindingType.Pathology))]
        [RadioReportId("hea_m_1102126", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        [RadioReportId("hea_m_100429", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.PituitaryStalkSideType))]
        [RadioReportId("hea_m_120325", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        ToTheRight = 3,

        [RadioReportId("hea_m_050365", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_m_070427", InstanceName = InstanceNames.BasalNuclei, CustomConditionName = nameof(BasalNucleiFindingType.Pathology))]
        [RadioReportId("hea_m_1102127", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinusesVariant))]
        [RadioReportId("hea_m_100430", InstanceName = nameof(SellarRegionFinding) + nameof(SellarRegionFinding.PituitaryStalkSideType))]
        [RadioReportId("hea_m_120326", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        ToTheLeft = 4,

        [RadioReportId("hea_m_110277", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.SkullBase))]
        [RadioReportId("hea_m_110336", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.TemporalBone))]
        [RadioReportId("hea_m_110286", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Orbita))]
        [RadioReportId("hea_m_1102145", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.ParanasalSinuses))]
        [RadioReportId("hea_m_1102192", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        [RadioReportId("hea_m_1102291", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        BothSides = 5,

        [RadioReportId("hea_m_1102290", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.Skull))]
        [RadioReportId("hea_m_1102339", InstanceName = InstanceNames.FacialSkull, CustomConditionName = nameof(FacialSkullFindingType.OralCavity))]
        Median = 6
    }
}