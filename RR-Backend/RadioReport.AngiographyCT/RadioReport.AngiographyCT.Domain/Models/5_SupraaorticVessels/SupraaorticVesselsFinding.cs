using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages.Localizers;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class SupraaorticVesselsFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_050106")]
        public SupraaorticVesselsFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("ang_c_0502xx", InstanceName = InstanceNames.SupraaorticVessels, IsExportable = false)]
        public SideType SideType { get; set; }

        public PathologyType PathologyType { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_c_050419", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050433", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050473", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504102", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504131", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_c_050421", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050435", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050475", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504104", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504133", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? DiameterStenosis { get; set; }

        [RadioReportId("ang_c_050424", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050438", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050478", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504107", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504136", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? DiameterDiseaseFreePoststenoticSegment { get; set; }

        [RadioReportId("ang_c_050427", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050441", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050481", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504110", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504139", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? DegreeOfStenosisCalculatedInNASCET { get; set; }

        [RadioReportId("ang_c_050505", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050515", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        public bool IsCalcification { get; set; }

        [RadioReportId("ang_c_050506", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050516", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        public bool IsSoftPlaque { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_c_050511", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_0504173", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_050521", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_050446", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_050532", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_050486", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_050542", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_0504115", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery), CustomConditionName = nameof(PathologyType.Dissection))]
        [RadioReportId("ang_c_050552", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries), CustomConditionName = nameof(PathologyType.StenosisOrOcclusion))]
        [RadioReportId("ang_c_0504144", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries), CustomConditionName = nameof(PathologyType.Dissection))]
        public int? Length { get; set; }

        [RadioReportId("ang_c_050513", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050523", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050534", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050544", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050554", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsShortStenosis { get; set; }

        [RadioReportId("ang_c_0504171", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050444", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050484", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504113", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504142", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsWallHematoma { get; set; }

        [RadioReportId("ang_c_0504176", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050449", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050489", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504118", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504147", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsContrastEnhancementOfTheArterialWall { get; set; }

        [RadioReportId("ang_c_0504177", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050450", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050490", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504119", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504148", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsLocoregionalObliterationFattyTissue { get; set; }

        [RadioReportId("ang_c_0504178", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050451", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050491", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504120", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_0504149", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsCaliberIrregularities { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("ang_c_0504183", InstanceName = nameof(SupraaorticVesselsFindingType.CommonCarotidArtery))]
        [RadioReportId("ang_c_050456", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050496", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_0504125", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsPanarteritisNodosa { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_c_050463", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_0504156", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("ang_c_050525", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050536", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        public bool IsBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery { get; set; }

        [RadioReportId("ang_c_050526", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_050537", InstanceName = nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery))]
        [RadioReportId("ang_c_050546", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        [RadioReportId("ang_c_050556", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsCirculusArteriosusWillisii { get; set; }

        [RadioReportId("ang_c_050465", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        [RadioReportId("ang_c_0504158", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsSubarachnoidHemorrhage { get; set; }

        public SubarachnoidHemorrhageType SubarachnoidHemorrhageType { get; set; }

        #endregion

       
        #region AnatomicVariants

        [RadioReportId("ang_c_050204", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightP1HypoplasiaOrFTPConfiguration { get; set; }

        [RadioReportId("ang_c_050205", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightP1Aplasia { get; set; }

        [RadioReportId("ang_c_050206", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightP1SplittingOrDuplication { get; set; }

        [RadioReportId("ang_c_050207", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightA1Hypoplasia { get; set; }

        [RadioReportId("ang_c_050208", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightA1Aplasia { get; set; }

        [RadioReportId("ang_c_050209", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightA1SplittingOrDuplication { get; set; }

        [RadioReportId("ang_c_050210", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomPHypoplasia { get; set; }

        [RadioReportId("ang_c_050211", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomPAplasia { get; set; }

        [RadioReportId("ang_c_050212", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightPICAEndingAV { get; set; }

        [RadioReportId("ang_c_050213", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAVHypoplasia { get; set; }

        [RadioReportId("ang_c_050214", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAVAplasia { get; set; }

        [RadioReportId("ang_c_050215", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightTripleACA { get; set; }

        [RadioReportId("ang_c_050301", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomAHypoplasia { get; set; }

        [RadioReportId("ang_c_050302", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomAAplasia { get; set; }

        [RadioReportId("ang_c_050303", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsRightAcomASplittingOrDuplication { get; set; }


        [RadioReportId("ang_c_050402", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftP1HypoplasiaOrFTPConfiguration { get; set; }

        [RadioReportId("ang_c_050403", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftP1Aplasia { get; set; }

        [RadioReportId("ang_c_050404", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftP1SplittingOrDuplication { get; set; }

        [RadioReportId("ang_c_050405", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftA1Hypoplasia { get; set; }

        [RadioReportId("ang_c_050406", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftA1Aplasia { get; set; }

        [RadioReportId("ang_c_050407", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftA1SplittingOrDuplication { get; set; }

        [RadioReportId("ang_c_050408", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomPHypoplasia { get; set; }

        [RadioReportId("ang_c_050409", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomPAplasia { get; set; }

        [RadioReportId("ang_c_050410", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftPICAEndingAV { get; set; }

        [RadioReportId("ang_c_050411", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAVHypoplasia { get; set; }

        [RadioReportId("ang_c_050412", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAVAplasia { get; set; }

        [RadioReportId("ang_c_050413", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftTripleACA { get; set; }

        [RadioReportId("ang_c_050501", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomAHypoplasia { get; set; }

        [RadioReportId("ang_c_050502", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomAAplasia { get; set; }

        [RadioReportId("ang_c_050503", InstanceName = nameof(SupraaorticVesselsFindingType.AnatomicVariants))]
        public bool IsLeftAcomASplittingOrDuplication { get; set; }
        
        #endregion

       
        #region InternalCarotidArtery

        [RadioReportId("ang_c_050223", InstanceName = nameof(SupraaorticVesselsFindingType.InternalCarotidArtery))]
        public InternalCarotidArterySegmentsLocations InternalCarotidArterySegmentsLocation { get; set; }

        #endregion

       
        #region ExternalCarotidArtery 

        public AffectedBranchType AffectedBranchType { get; set; }

        #endregion

       
        #region VertebralArtery 

        [RadioReportId("ang_c_050241", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV1 { get; set; }

        [RadioReportId("ang_c_050242", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV2 { get; set; }

        [RadioReportId("ang_c_050243", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV3 { get; set; }

        [RadioReportId("ang_c_050244", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsSegmentV4 { get; set; }

        [RadioReportId("ang_c_050547", InstanceName = nameof(SupraaorticVesselsFindingType.VertebralArtery))]
        public bool IsContralateralVertebralArtery { get; set; }

        #endregion


        #region CircleOfWillisCerebralArteries

        [RadioReportId("ang_c_050247", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public AffectedSegmentsOrVesselsLocations AffectedSegmentsOrVesselsLocation { get; set; }

        [RadioReportId("ang_c_050557", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsLeptomeningealCollaterals { get; set; }

        [RadioReportId("ang_c_050558", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsContralateralInternalCarotidArtery { get; set; }

        [RadioReportId("ang_c_050559", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsPosteriorCommunicansArtery { get; set; }

        [RadioReportId("ang_c_050560", InstanceName = nameof(SupraaorticVesselsFindingType.CircleOfWillisCerebralArteries))]
        public bool IsOphtalmicArtery { get; set; }

        #endregion

       
        #region CerebralVeinsOrVenousSinuses 

        [RadioReportId("ang_c_050250", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsSuperiorSagittalSinus { get; set; }

        [RadioReportId("ang_c_050251", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsInferiorSagittalSinus { get; set; }

        [RadioReportId("ang_c_050252", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsGreatCerebralVein { get; set; }

        [RadioReportId("ang_c_050253", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsStraightSinus { get; set; }

        [RadioReportId("ang_c_050254", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsConfluenceOfSinuses { get; set; }

        [RadioReportId("ang_c_050255", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsTransverseSinus { get; set; }

        [RadioReportId("ang_c_050257", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightTransverseSinus { get; set; }

        [RadioReportId("ang_c_050258", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftTransverseSinus { get; set; }

        [RadioReportId("ang_c_050259", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsSigmoidSinus { get; set; }

        [RadioReportId("ang_c_050261", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightSigmoidSinus { get; set; }

        [RadioReportId("ang_c_050262", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftSigmoidSinus { get; set; }

        [RadioReportId("ang_c_050326", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsSuperiorPetrosalSinus { get; set; }

        [RadioReportId("ang_c_050328", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightSuperiorPetrosalSinus { get; set; }

        [RadioReportId("ang_c_050329", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftSuperiorPetrosalSinus { get; set; }

        [RadioReportId("ang_c_050330", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsInferiorPetrosalSinus { get; set; }

        [RadioReportId("ang_c_050332", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightInferiorPetrosalSinus { get; set; }

        [RadioReportId("ang_c_050333", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftInferiorPetrosalSinus { get; set; }

        [RadioReportId("ang_c_0504161", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsInternalJugularVein { get; set; }

        [RadioReportId("ang_c_0504163", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightInternalJugularVein { get; set; }

        [RadioReportId("ang_c_0504164", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftInternalJugularVein { get; set; }

        [RadioReportId("ang_c_0504165", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsCavernousSinus { get; set; }

        [RadioReportId("ang_c_0504167", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsRightCavernousSinus { get; set; }

        [RadioReportId("ang_c_0504168", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsLeftCavernousSinus { get; set; }

        [RadioReportId("ang_c_050566", InstanceName = nameof(SupraaorticVesselsFindingType.CerebralVeinsOrVenousSinuses))]
        public bool IsCerebralEdema { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PathologyType.StenosisOrOcclusion) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.Dissection) => PathologyType.ToString() == customConditionId,

                nameof(SupraaorticVesselsFindingType.CommonCarotidArtery) => FindingType.ToString() == customConditionId,
                nameof(SupraaorticVesselsFindingType.InternalCarotidArtery) => FindingType.ToString() == customConditionId,
                nameof(SupraaorticVesselsFindingType.ExternalCarotidArtery) => FindingType.ToString() == customConditionId,
                nameof(SupraaorticVesselsFindingType.VertebralArtery) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
