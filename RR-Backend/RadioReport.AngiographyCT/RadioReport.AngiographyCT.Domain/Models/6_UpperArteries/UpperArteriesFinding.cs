using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class UpperArteriesFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_060106")]
        public UpperArteriesFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("ang_c_060203-l", InstanceName = InstanceNames.UpperArteries, IsExportable = false)]
        public SideType SideType { get; set; }

        public PathologyType PathologyType { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_c_0603105", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604116", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_c_0603107", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604118", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public int? DiameterStenosis { get; set; }

        [RadioReportId("ang_c_0603111", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604121", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public int? DiameterDiseaseFreePoststenoticSegment { get; set; }

        [RadioReportId("ang_c_0603141", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0604140", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public int? DegreeOfStenosisAccordingToNASCET { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_c_0604105", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_0603117", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0603126", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605119", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060431", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604129", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605119", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060431", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604129", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605119", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060431", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604129", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605119", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060431", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604129", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605119", InstanceName = nameof(UpperArteriesFindingType.RadialArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060431", InstanceName = nameof(UpperArteriesFindingType.RadialArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604129", InstanceName = nameof(UpperArteriesFindingType.RadialArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605120", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060436", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604130", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605120", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060436", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604130", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605120", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060436", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604130", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_c_0605120", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_060436", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_0604130", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.Aneurysm))]
        public int? Length { get; set; }

        [RadioReportId("ang_c_0604106", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0605112", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsShortStenosis { get; set; }

        [RadioReportId("ang_c_0605101", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0605114", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsThrombusSurroundedByContrastAgent { get; set; }

        [RadioReportId("ang_c_0605102", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0605115", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsCollateralization { get; set; }

        [RadioReportId("ang_c_0605103", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_0605116", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsPreStenoticDilatation { get; set; }

        [RadioReportId("ang_c_0605104", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605117", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsSubclavianStealSyndrome { get; set; }

        [RadioReportId("ang_c_0605105", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_0605118", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_0605126", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSuspiciousOf { get; set; }

        [RadioReportId("ang_c_0603114", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060417", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsWallHematoma { get; set; }

        [RadioReportId("ang_c_060306", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060401", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsAffectionOfDownstreamVessels { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_c_0603123", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060421", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("ang_c_0604108-l", InstanceName = InstanceNames.UpperArteries, IsExportable = false)]
        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_c_060503", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public int? MaxDiameterPrevExam { get; set; }

        public ImpressionType ImpressionType { get; set; }

        public DetailsVascularMalformationType DetailsVascularMalformationType { get; set; }

        public ArteriovenousMalformationType ArteriovenousMalformationType { get; set; }

        public HemodialysisShuntType HemodialysisShuntType { get; set; }

        [RadioReportId("ang_c_060510", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060510", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060510", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsStenosis { get; set; }

        [RadioReportId("ang_c_060512", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060512", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060512", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsOcclusion { get; set; }

        [RadioReportId("ang_c_060514", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060514", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060514", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsAneurysm { get; set; }

        [RadioReportId("ang_c_060516", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060516", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060516", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsInfection { get; set; }

        [RadioReportId("ang_c_060511", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060511", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060511", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsSuspicionOfStenosis { get; set; }

        [RadioReportId("ang_c_060513", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060513", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060513", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsSuspicionOfOcclusion { get; set; }

        [RadioReportId("ang_c_060515", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060515", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060515", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsSuspicionOfAneurysm { get; set; }

        [RadioReportId("ang_c_060517", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_c_060517", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_c_060517", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsSuspicionOfInfection { get; set; }

        #endregion

        #region BrachiocephalicTrunk

        [RadioReportId("ang_c_060307", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        public bool IsCommonCarotidArtery { get; set; }

        [RadioReportId("ang_c_060308", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        public bool IsBrachialArtery { get; set; }

        #endregion

        #region SubclavianArtery

        [RadioReportId("ang_c_060207", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsProximalAspect { get; set; }

        [RadioReportId("ang_c_060208", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsMidAspect { get; set; }

        [RadioReportId("ang_c_060210", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsDistalAspect { get; set; }
        #endregion

        #region DiffuseVascularPathology

        [RadioReportId("ang_c_0602102", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsBrachiocephalicTrunk { get; set; }

        [RadioReportId("ang_c_0602103", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightSubclavianArtery { get; set; }

        [RadioReportId("ang_c_0602104", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightProximalAspect { get; set; }

        [RadioReportId("ang_c_0602105", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightMidAspect { get; set; }

        [RadioReportId("ang_c_0602106", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightDistalAspect { get; set; }

        [RadioReportId("ang_c_0602107", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightAxillarArtery { get; set; }

        [RadioReportId("ang_c_0602108", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightBrachialArtery { get; set; }

        [RadioReportId("ang_c_0602109", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightUlnarArtery { get; set; }

        [RadioReportId("ang_c_0602110", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightRadialArtery { get; set; }

        [RadioReportId("ang_c_0602111", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightDeepPalmarArch { get; set; }

        [RadioReportId("ang_c_0602112", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightSuperficialPalmarArch { get; set; }

        [RadioReportId("ang_c_0602113", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightPalmarDigitalArteries { get; set; }

        [RadioReportId("ang_c_0602114", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public NumberOfAffectedArteriesType RightNumberOfAffectedArteriesType { get; set; }

        [RadioReportId("ang_c_0603129", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftSubclavianArtery { get; set; }

        [RadioReportId("ang_c_0603130", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftProximalAspect { get; set; }

        [RadioReportId("ang_c_0603131", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftMidAspect { get; set; }

        [RadioReportId("ang_c_0603132", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftDistalAspect { get; set; }

        [RadioReportId("ang_c_0603133", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftAxillarArtery { get; set; }

        [RadioReportId("ang_c_0603134", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftBrachialArtery { get; set; }

        [RadioReportId("ang_c_0603135", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftUlnarArtery { get; set; }

        [RadioReportId("ang_c_0603136", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftRadialArtery { get; set; }

        [RadioReportId("ang_c_0603137", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftDeepPalmarArch { get; set; }

        [RadioReportId("ang_c_0603138", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftSuperficialPalmarArch { get; set; }

        [RadioReportId("ang_c_0603139", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftPalmarDigitalArteries { get; set; }

        [RadioReportId("ang_c_0603140", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public NumberOfAffectedArteriesType LeftNumberOfAffectedArteriesType { get; set; }

        [RadioReportId("ang_c_0604132", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSeveralShortStenoses { get; set; }

        [RadioReportId("ang_c_0604133", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSegmentalOcclusions { get; set; }

        [RadioReportId("ang_c_0604134", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsWallThickening { get; set; }

        [RadioReportId("ang_c_0604135", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsT2wHyperintensityOfArterialWallOrEdema { get; set; }

        [RadioReportId("ang_c_0604137", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsMicroaneurysms { get; set; }

        [RadioReportId("ang_c_0604138", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsCorkscrewCollaterals { get; set; }

        [RadioReportId("ang_c_0604139", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsCaliberVariations { get; set; }

        [RadioReportId("ang_c_0605125", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public UpperArteriesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("ang_c_0605128", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public UpperArteriesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("ang_c_0605129", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSubordinated { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PathologyType.StenosisOrOcclusion) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.Dissection) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.Aneurysm) => PathologyType.ToString() == customConditionId,
                _ => false
            };
    }
}
