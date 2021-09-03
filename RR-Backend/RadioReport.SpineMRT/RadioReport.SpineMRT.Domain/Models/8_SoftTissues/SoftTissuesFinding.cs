using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.SoftTissues;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SoftTissuesFinding : SoftTissuesFindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("spi_m_080206", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080206", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public int? SizeDiameterInMm { get; set; }

        [RadioReportId("spi_m_080306", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_0803303", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public SoftTissuesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("spi_m_080308", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_0803305", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public SoftTissuesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("spi_m_080309", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_0803306", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsSecondary { get; set; }

        #endregion

        #region ParaspinalMass

        [RadioReportId("spi_m_080204", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineLocations SpineLocation1 { get; set; }

        [RadioReportId("spi_m_080209", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public int? ExpansionInMm { get; set; }

        [RadioReportId("spi_m_080303", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineAxialLocations SpineAxialLocation { get; set; }

        [RadioReportId("spi_m_080214", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("spi_m_080215", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsBones { get; set; }

        [RadioReportId("spi_m_080216", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsMuscle { get; set; }

        [RadioReportId("spi_m_080217", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsNerveRoot { get; set; }

        [RadioReportId("spi_m_080219", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineLocationBones SpineLocationBones { get; set; }

        [RadioReportId("spi_m_080412", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public SpineLocations SpineLocation2 { get; set; }

        #endregion

        #region IntraduralExtramedullaryMass

        [RadioReportId("spi_m_080220", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public SpineLocationDisks SpineLocationDisks1 { get; set; }

        [RadioReportId("spi_m_0802304", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public int? MaxCraniocaudalDiameter { get; set; }

        [RadioReportId("spi_m_080223", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsExtensionOsseousNeuralForamen { get; set; }

        [RadioReportId("spi_m_080224", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsScalloping { get; set; }

        [RadioReportId("spi_m_080225", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("spi_m_080221", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public SpineLocationDisks SpineLocationDisks2 { get; set; }

        [RadioReportId("spi_m_0804302", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public SpineLocationDisks SpineLocationDisks3 { get; set; }

        #endregion

        #region LymphNodes

        [RadioReportId("spi_m_080227", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsCervical { get; set; }

        [RadioReportId("spi_m_080229", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsCervicalRight { get; set; }

        [RadioReportId("spi_m_080230", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsCervicalLeft { get; set; }

        [RadioReportId("spi_m_080231", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParaaortal { get; set; }

        [RadioReportId("spi_m_080232", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsAortocaval { get; set; }

        [RadioReportId("spi_m_080233", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParailiacal { get; set; }

        [RadioReportId("spi_m_080235", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParailiacalRight { get; set; }

        [RadioReportId("spi_m_080236", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsParailiacalLeft { get; set; }

        [RadioReportId("spi_m_080237", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsPreSacral { get; set; }

        [RadioReportId("spi_m_080239", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsPreSacralRight { get; set; }

        [RadioReportId("spi_m_080240", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public bool IsPreSacralLeft { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("spi_m_080324", InstanceName = nameof(SoftTissuesFindingType.LymphNodes))]
        public int? LymphadenopathyInMm { get; set; }

        #endregion

        #region VesselsUreter
        public VesselsUretersType VesselsUretersType { get; set; }

        public VesselsSide VesselsSide { get; set; }

        public ArteriopathyType ArteriopathyType { get; set; }

        [RadioReportId("spi_m_080334", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        public int? AneurysmMaximumDiameter { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("spi_m_080350", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        public bool IsUreterRight { get; set; }

        [RadioReportId("spi_m_080351", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        public bool IsUreterLeft { get; set; }

        #endregion

        #region ParavertebralMuscles

        [RadioReportId("spi_m_080250", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsLongissimusCapitisMuscle { get; set; }

        [RadioReportId("spi_m_080251", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsLevatorScapulaeMuscle { get; set; }

        [RadioReportId("spi_m_080252", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSemispinalisColliMuscle { get; set; }

        [RadioReportId("spi_m_080253", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSemispinalisCapitisMuscle { get; set; }

        [RadioReportId("spi_m_080254", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsSpleniusCapitisMuscle { get; set; }

        [RadioReportId("spi_m_080255", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsTrapeziusMuscle { get; set; }

        [RadioReportId("spi_m_080356", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsErectorSpinaeMuscle { get; set; }

        [RadioReportId("spi_m_080357", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsIliocostalisMuscle { get; set; }

        [RadioReportId("spi_m_080358", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsLongissimusMuscle { get; set; }

        [RadioReportId("spi_m_080359", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsQuadratusLumborumMuscle { get; set; }

        [RadioReportId("spi_m_080360", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsPsoasMajorMuscle { get; set; }

        [RadioReportId("spi_m_080361", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMultifidusMuscle { get; set; }

        public LocalizationWithinTheMuscleType LocalizationWithinTheMuscleType { get; set; }

        [RadioReportId("spi_m_080257", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMuscleLesion { get; set; }

        public ClassificationMunichConsensusType ClassificationMunichConsensusType { get; set; }

        [RadioReportId("spi_m_080263", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles), CustomConditionName = nameof(ClassificationMunichConsensusType.MuscleFiberTear))]
        [RadioReportId("spi_m_080270", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles), CustomConditionName = nameof(ClassificationMunichConsensusType.MuscleBundleTears))]
        public bool IsDiameterOfRupture { get; set; }

        [RadioReportId("spi_m_080264", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsRetraction { get; set; }

        [RadioReportId("spi_m_080266", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public int? RetractionInMm { get; set; }

        [RadioReportId("spi_m_080267", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsWavyAppearanceOfTheFibers { get; set; }

        [RadioReportId("spi_m_080268", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsOsseousAvulsion { get; set; }

        public BonyAvulsionType BonyAvulsionType { get; set; }
        
        [RadioReportId("spi_m_080362", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsHematoma { get; set; } 

        [RadioReportId("spi_m_080364", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsIntramuscularly { get; set; }

        [RadioReportId("spi_m_080365", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsInterfascial { get; set; }

        [RadioReportId("spi_m_080366", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsIntermuscular { get; set; }


        [RadioReportId("spi_m_080525", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsFattyDegeneration { get; set; }

        [RadioReportId("spi_m_080526", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMuscleHypertrophy { get; set; }

        [RadioReportId("spi_m_080527", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMuscleAtrophy { get; set; }

        public MuscleAtrophyType MuscleAtrophyType { get; set; }
        
        [RadioReportId("spi_m_080530", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsApophysitis { get; set; }

        [RadioReportId("spi_m_080531", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsFascialRupture { get; set; }

        [RadioReportId("spi_m_080532", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsMuscleHernia { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(SoftTissuesFindingType.ParaspinalMass) => FindingType.ToString() == customConditionId,
                nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass) => FindingType.ToString() == customConditionId,
                nameof(SoftTissuesFindingType.ParaspinalMass) + nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass) =>
                            FindingType == SoftTissuesFindingType.ParaspinalMass ||
                            FindingType == SoftTissuesFindingType.IntraduralExtramedullaryMass,
                nameof(VesselsUretersType.VertebralArtery) => VesselsUretersType == VesselsUretersType.VertebralArtery,
                nameof(VesselsUretersType.CommonIliacArtery) + nameof(VesselsUretersType.ExternIliacArtery) =>
                            VesselsUretersType == VesselsUretersType.CommonIliacArtery ||
                            VesselsUretersType == VesselsUretersType.ExternIliacArtery,
                nameof(ClassificationMunichConsensusType.MuscleFiberTear) => ClassificationMunichConsensusType.ToString() == customConditionId,
                nameof(ClassificationMunichConsensusType.MuscleBundleTears) => ClassificationMunichConsensusType.ToString() == customConditionId,
                _ => false
            };
    }
}
