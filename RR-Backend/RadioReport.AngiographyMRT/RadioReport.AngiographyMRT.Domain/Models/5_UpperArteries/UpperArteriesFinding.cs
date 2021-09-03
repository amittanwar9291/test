using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.AngiographyMRT.Domain.Enums.UpperArteries;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class UpperArteriesFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_m_050106")]
        public UpperArteriesFindingType FindingType { get; set; }

        #region Common

        public PathologyType PathologyType { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_m_0503105", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_0504116", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_m_0503107", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0504118", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0504118", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0504118", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0504118", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0504118", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public int? DiameterStenosis { get; set; }

        [RadioReportId("ang_m_0503111", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0504121", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0504121", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0504121", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0504121", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0504121", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public int? DiameterDiseaseFreePoststenoticSegment { get; set; }

        [RadioReportId("ang_m_0503141", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0504140", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0504140", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0504140", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0504140", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0504140", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public int? DegreeOfStenosisAccordingToNASCET { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_m_0504105", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0503117", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_0503126", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_0505111", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_050429", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_0505111", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_050429", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_0505111", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_050429", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_0505111", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_050429", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_0505111", InstanceName = nameof(UpperArteriesFindingType.RadialArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_050429", InstanceName = nameof(UpperArteriesFindingType.RadialArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.RadialArtery), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_050452", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_050452", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_050452", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.Aneurysm))]
        [RadioReportId("ang_m_050452", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0504128", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries), CustomConditionName = nameof(PathologyType.Aneurysm))]
        public int? Length { get; set; }

        [RadioReportId("ang_m_0504106", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505112", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505112", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505112", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505112", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505112", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050454", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050454", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050454", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050454", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsShortStenosis { get; set; }

        [RadioReportId("ang_m_0505101", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505114", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505114", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505114", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505114", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505114", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsThrombusSurroundedByContrastAgent { get; set; }

        [RadioReportId("ang_m_0505102", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505115", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505115", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505115", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505115", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505115", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050455", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050455", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050455", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050455", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsCollateralization { get; set; }

        [RadioReportId("ang_m_0505103", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505116", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0505116", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_0505116", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0505116", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0505116", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050456", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050456", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050456", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050456", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public bool IsPreStenoticDilatation { get; set; }

        [RadioReportId("ang_m_0505104", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505117", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsSubclavianStealSyndrome { get; set; }

        [RadioReportId("ang_m_0505105", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_0505118", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_0504129", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_0504129", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_0504129", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_0505126", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSuspiciousFor { get; set; }

        [RadioReportId("ang_m_0503114", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050417", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050417", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050417", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050417", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050417", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsWallHematoma { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_m_0503123", InstanceName = nameof(UpperArteriesFindingType.BrachiocephalicTrunk))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.AxillarArtery))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.DeepPalmarArch))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.SuperficialPalmarArch))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.CommonPalmarDigitalArteries))]
        [RadioReportId("ang_m_050421", InstanceName = nameof(UpperArteriesFindingType.ProperPalmarDigitalArteries))]
        public int? MaxDiameter { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        public SideType SideType { get; set; }

        public DetailsVascularMalformationType DetailsVascularMalformationType { get; set; }

        public ArteriovenousMalformationType ArteriovenousMalformationType { get; set; }

        public HemodialysisShuntType HemodialysisShuntType { get; set; }

        [RadioReportId("ang_m_050445", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050445", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050445", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsStenosis { get; set; }

        [RadioReportId("ang_m_050446", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050446", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050446", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsOcclusion { get; set; }

        [RadioReportId("ang_m_050447", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050447", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050447", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsAneurysm { get; set; }

        [RadioReportId("ang_m_050448", InstanceName = nameof(UpperArteriesFindingType.BrachialArtery))]
        [RadioReportId("ang_m_050448", InstanceName = nameof(UpperArteriesFindingType.UlnarArtery))]
        [RadioReportId("ang_m_050448", InstanceName = nameof(UpperArteriesFindingType.RadialArtery))]
        public bool IsInfection { get; set; }

        #endregion

        #region SubclavianArtery

        [RadioReportId("ang_m_050207", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsProximalAspect { get; set; }

        [RadioReportId("ang_m_050208", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsMidAspect { get; set; }

        [RadioReportId("ang_m_050210", InstanceName = nameof(UpperArteriesFindingType.SubclavianArtery))]
        public bool IsDistalAspect { get; set; }

        #endregion

        #region DiffuseVascularPathology

        [RadioReportId("ang_m_0502102", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsBrachiocephalicTrunk { get; set; }

        [RadioReportId("ang_m_0502103", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightSubclavianArtery { get; set; }

        [RadioReportId("ang_m_0502104", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightProximalAspect { get; set; }

        [RadioReportId("ang_m_0502105", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightMidAspect { get; set; }

        [RadioReportId("ang_m_0502106", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightDistalAspect { get; set; }

        [RadioReportId("ang_m_0502107", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightAxillarArtery { get; set; }

        [RadioReportId("ang_m_0502108", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightBrachialArtery { get; set; }

        [RadioReportId("ang_m_0502109", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightUlnarArtery { get; set; }

        [RadioReportId("ang_m_0502110", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightRadialArtery { get; set; }

        [RadioReportId("ang_m_0502111", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightDeepPalmarArch { get; set; }

        [RadioReportId("ang_m_0502112", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightSuperficialPalmarArch { get; set; }

        [RadioReportId("ang_m_0502113", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsRightPalmarDigitalArteries { get; set; }

        [RadioReportId("ang_m_0502114", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public NumberOfAffectedArteriesType RightNumberOfAffectedArteriesType { get; set; }

        [RadioReportId("ang_m_0503129", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftSubclavianArtery { get; set; }

        [RadioReportId("ang_m_0503130", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftProximalAspect { get; set; }

        [RadioReportId("ang_m_0503131", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftMidAspect { get; set; }

        [RadioReportId("ang_m_0503132", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftDistalAspect { get; set; }

        [RadioReportId("ang_m_0503133", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftAxillarArtery { get; set; }

        [RadioReportId("ang_m_0503134", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftBrachialArtery { get; set; }

        [RadioReportId("ang_m_0503135", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftUlnarArtery { get; set; }

        [RadioReportId("ang_m_0503136", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftRadialArtery { get; set; }

        [RadioReportId("ang_m_0503137", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftDeepPalmarArch { get; set; }

        [RadioReportId("ang_m_0503138", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftSuperficialPalmarArch { get; set; }

        [RadioReportId("ang_m_0503139", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsLeftPalmarDigitalArteries { get; set; }

        [RadioReportId("ang_m_0503140", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public NumberOfAffectedArteriesType LeftNumberOfAffectedArteriesType { get; set; }

        [RadioReportId("ang_m_0504132", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSeveralShortStenoses { get; set; }

        [RadioReportId("ang_m_0504133", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsSegmentalOcclusions { get; set; }

        [RadioReportId("ang_m_0504134", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsWallThickening { get; set; }

        [RadioReportId("ang_m_0504135", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsT2wHyperintensityOfArterialWallOrEdema { get; set; }

        [RadioReportId("ang_m_0504136", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsContrastEnhancementOfTheArterialWall { get; set; }

        [RadioReportId("ang_m_0504137", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsMicroaneurysms { get; set; }

        [RadioReportId("ang_m_0504138", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsCorkscrewCollaterals { get; set; }

        [RadioReportId("ang_m_0504139", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public bool IsCaliberVariations { get; set; }

        [RadioReportId("ang_m_0505125", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public UpperArteriesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("ang_m_0505128", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
        public UpperArteriesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("ang_m_0505129", InstanceName = nameof(UpperArteriesFindingType.DiffuseVascularPathology))]
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
