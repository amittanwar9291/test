using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class SupraaorticVesselsFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_m_040106")]
        public SupraaorticVesselsFindingType FindingType { get; set; }

        #region Common

        public SideType SideType { get; set; }

        public PathologyType PathologyType { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_m_040426", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040426", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040426", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040426", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040426", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_m_040420", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040420", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040420", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040420", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040420", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? DiameterStenosis { get; set; }

        [RadioReportId("ang_m_040422", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040422", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040422", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040422", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040422", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? DiameterDiseaseFreePoststenoticSegment { get; set; }

        [RadioReportId("ang_m_040424", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040424", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040424", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040424", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040424", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? DegreeOfStenosisCalculatedInNASCET { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_m_040522", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0404104", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_040522", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0404104", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_040522", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0404104", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_040522", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0404104", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_m_040522", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_m_0404104", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries), CustomConditionName = nameof(PathologyType.Dissection))]
        public int? Length { get; set; }

        [RadioReportId("ang_m_040524", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_040524", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040524", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040524", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040524", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsShortStenosis { get; set; }

        [RadioReportId("ang_m_0404102", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404102", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404128", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404128", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404128", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsWallHematoma { get; set; }

        [RadioReportId("ang_m_0404107", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404107", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404107", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404107", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404107", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsContrastEnhancementOfTheArterialWall { get; set; }

        [RadioReportId("ang_m_0404108", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404108", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404108", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404108", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404108", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsT2wHyperintensityOfArterialWallOrEdema { get; set; }

        [RadioReportId("ang_m_0404109", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404109", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404109", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404109", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404109", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsCaliberIrregularities { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("ang_m_0404114", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404114", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404114", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404114", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsPanarteritisNodosa { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_m_0404121", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_m_0404121", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404121", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_0404121", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_0404121", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("ang_m_040526", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040526", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        public bool IsBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery { get; set; }

        [RadioReportId("ang_m_040527", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_040527", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_m_040527", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_m_040527", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsCirculusArteriosusWillisii { get; set; }

        [RadioReportId("ang_m_0404123", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_m_0404123", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsSubarachnoidHemorrhage { get; set; }

        public SubarachnoidHemorrhageType SubarachnoidHemorrhageType { get; set; }

        #endregion

        #region AnatomicVariants

        [RadioReportId("ang_m_040204", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightP1HypoplasiaOrFTPConfiguration { get; set; }

        [RadioReportId("ang_m_040205", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightP1Aplasia { get; set; }

        [RadioReportId("ang_m_040206", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightP1FenestrationOrDuplication { get; set; }

        [RadioReportId("ang_m_040207", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightA1Hypoplasia { get; set; }

        [RadioReportId("ang_m_040208", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightA1Aplasia { get; set; }

        [RadioReportId("ang_m_040209", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightA1FenestrationOrDuplication { get; set; }

        [RadioReportId("ang_m_040210", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightPcomAHypoplasia { get; set; }

        [RadioReportId("ang_m_040211", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightPcomAAplasia { get; set; }

        [RadioReportId("ang_m_040212", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightPICATerminationVA { get; set; }

        [RadioReportId("ang_m_040213", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightVAHypoplasia { get; set; }

        [RadioReportId("ang_m_040214", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightVAAplasia { get; set; }

        [RadioReportId("ang_m_040215", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightTriplicatedACA { get; set; }

        [RadioReportId("ang_m_040301", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomAAplasia { get; set; }

        [RadioReportId("ang_m_040302", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomAFenestrationOrDuplication { get; set; }

        [RadioReportId("ang_m_040402", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftP1HypoplasiaOrFTPConfiguration { get; set; }

        [RadioReportId("ang_m_040403", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftP1Aplasia { get; set; }

        [RadioReportId("ang_m_040404", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftP1FenestrationOrDuplication { get; set; }

        [RadioReportId("ang_m_040405", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftA1Hypoplasia { get; set; }

        [RadioReportId("ang_m_040406", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftA1Aplasia { get; set; }

        [RadioReportId("ang_m_040407", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftA1FenestrationOrDuplication { get; set; }

        [RadioReportId("ang_m_040408", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftPcomAHypoplasia { get; set; }

        [RadioReportId("ang_m_040409", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftPcomAAplasia { get; set; }

        [RadioReportId("ang_m_040410", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftPICATerminationVA { get; set; }

        [RadioReportId("ang_m_040411", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftVAHypoplasia { get; set; }

        [RadioReportId("ang_m_040412", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftVAAplasia { get; set; }

        [RadioReportId("ang_m_040413", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftTriplicatedACA { get; set; }

        [RadioReportId("ang_m_040501", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomAAplasia { get; set; }

        [RadioReportId("ang_m_040502", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomAFenestrationOrDuplication { get; set; }

        #endregion

        #region InternalCarotidArtery

        [RadioReportId("ang_m_040220", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        public InternalCarotidArterySegmentsLocations InternalCarotidArterySegmentsLocation { get; set; }

        #endregion

        #region ExternalCarotidArtery 

        public AffectedBranchType AffectedBranchType { get; set; }

        #endregion

        #region VertebralArtery 

        [RadioReportId("ang_m_040238", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV1 { get; set; }

        [RadioReportId("ang_m_040239", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV2 { get; set; }

        [RadioReportId("ang_m_040240", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV3 { get; set; }

        [RadioReportId("ang_m_040241", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV4 { get; set; }

        [RadioReportId("ang_m_040528", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsContralateralVertebralArtery { get; set; }

        #endregion

        #region CircleOfWillisCerebralArteries

        [RadioReportId("ang_m_0402102", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public AffectedSegmentsOrVesselsLocations AffectedSegmentsOrVesselsLocation { get; set; }

        [RadioReportId("ang_m_040529", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsLeptomeningealCollaterals { get; set; }

        [RadioReportId("ang_m_040530", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsContralateralInternalCarotidArtery { get; set; }

        [RadioReportId("ang_m_040531", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsPosteriorCommunicansArtery { get; set; }

        [RadioReportId("ang_m_040532", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsOphtalmicArtery { get; set; }

        #endregion

        #region CerebralVeinsOrVenousSinuses 

        [RadioReportId("ang_m_040270", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsSuperiorSagittalSinus { get; set; }

        [RadioReportId("ang_m_040271", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsInferiorSagittalSinus { get; set; }

        [RadioReportId("ang_m_040272", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsGreatCerebralVein { get; set; }

        [RadioReportId("ang_m_040273", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsStraightSinus { get; set; }

        [RadioReportId("ang_m_040274", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsConfluenceOfSinuses { get; set; }

        [RadioReportId("ang_m_040275", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightTransverseSinus { get; set; }

        [RadioReportId("ang_m_040276", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftTransverseSinus { get; set; }

        [RadioReportId("ang_m_040277", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightSigmoidSinus { get; set; }

        [RadioReportId("ang_m_040278", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftSigmoidSinus { get; set; }

        [RadioReportId("ang_m_040279", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightPetrosalSinus { get; set; }

        [RadioReportId("ang_m_040280", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftPetrosalSinus { get; set; }

        [RadioReportId("ang_m_040281", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightCavernousSinus { get; set; }

        [RadioReportId("ang_m_040282", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftCavernousSinus { get; set; }

        [RadioReportId("ang_m_040356", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsCerebralEdema { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PathologyType.StenosisOrOcclusion) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.Dissection) => PathologyType.ToString() == customConditionId,
                _ => false
            };
    }
}
