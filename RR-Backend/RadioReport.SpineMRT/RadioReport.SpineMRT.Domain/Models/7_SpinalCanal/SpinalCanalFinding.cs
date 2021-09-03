using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SpinalCanalFinding : SpinalCanalFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("spi_m_070203", InstanceName = nameof(SpinalCanalFindingType.SpinalCanalStenosis))]
        [RadioReportId("spi_m_070312", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        [RadioReportId("spi_m_070203", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070203", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_m_070414", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        [RadioReportId("spi_m_070226", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070479", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsSecondary { get; set; }

        [RadioReportId("spi_m_070434", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070320", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SpineLocations SpineLocationNonTarget { get; set; }

        [RadioReportId("spi_m_070223", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_0702501", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_0702506", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        [RadioReportId("spi_m_0702504", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_0704509", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SpinalCanalDifferentialDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("spi_m_070225", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_0702502", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_0702507", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        [RadioReportId("spi_m_0702505", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_0704510", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SpinalCanalDifferentialDiagnosisType DifferentialDiagnosis02 { get; set; }

        #endregion

        #region SpinalCanalStenosis

        public SpinalCanalStenosisDetailType SpinalCanalStenosisDetailType { get; set; }

        [RadioReportId("spi_m_070306", InstanceName = nameof(SpinalCanalFindingType.SpinalCanalStenosis))]
        public int? WidthOfTheSpinalCanal { get; set; }

        [RadioReportId("spi_m_070308", InstanceName = nameof(SpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsMyelopathy { get; set; }

        #endregion

        #region DevelopmentalDisorderOrMalformation

        public MalformationType MalformationType { get; set; }

        [RadioReportId("spi_m_070309", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        public bool IsCaudalPositionOfTheMedullaryCone { get; set; }

        [RadioReportId("spi_m_070310", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        public bool IsThickenedFilumTerminale { get; set; }

        [RadioReportId("spi_m_070402", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        public int? ExpansionInCcDimension { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("spi_m_070317", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        public int? ExpansionProtrusionCcDimension { get; set; }

        [RadioReportId("spi_m_070322", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        public int? Diameter { get; set; }

        public CharacterizationOpenType CharacterizationOpenType { get; set; }

        public LocalizationType LocalizationType { get; set; }

        [RadioReportId("spi_m_070413", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        public bool IsPerineuralCyst { get; set; }

        public DetailsClosedDysraphismType DetailsClosedDysraphismType { get; set; }

        public ClassificationSubcutaneousMassType ClassificationSubcutaneousMassType { get; set; }

        public ClassificationDysraphyType ClassificationDysraphyType { get; set; }

        public DifferentialDiagnosesType DifferentialDiagnosesType { get; set; }

        [RadioReportId("spi_m_070504", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.SimpleDysraphism))]
        [RadioReportId("spi_m_070516", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.ComplexDysraphism))]
        public bool IsT1wHyperintense { get; set; }

        [RadioReportId("spi_m_070505", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.SimpleDysraphism))]
        [RadioReportId("spi_m_070517", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.ComplexDysraphism))]
        public bool IsT2wHyperintense { get; set; }

        [RadioReportId("spi_m_070506", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.SimpleDysraphism))]
        [RadioReportId("spi_m_070518", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.ComplexDysraphism))]
        public bool IsT1wFatSaturationHypointense { get; set; }

        [RadioReportId("spi_m_070507", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.SimpleDysraphism))]
        [RadioReportId("spi_m_070519", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation), CustomConditionName = nameof(ClassificationDysraphyType.ComplexDysraphism))]
        public bool IsNoContrastEnhancement { get; set; }

        #endregion

        #region MassEffect

        [RadioReportId("spi_m_070329", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public int? SizeAxial { get; set; }

        [RadioReportId("spi_m_070332", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public int? SizeCraniocaudal { get; set; }

        public AdditionalExtensionType AdditionalExtensionType { get; set; }

        [RadioReportId("spi_m_070436", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsAnterior { get; set; }

        [RadioReportId("spi_m_070437", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsPosterior { get; set; }

        [RadioReportId("spi_m_070438", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsLeft { get; set; }

        [RadioReportId("spi_m_070439", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsRight { get; set; }

        [RadioReportId("spi_m_070234", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsRootDisplacement { get; set; }

        [RadioReportId("spi_m_070236", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public SpineLocationBones SpineLocationBones { get; set; }

        [RadioReportId("spi_m_070365", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070376", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070376", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        public SpineLocationDisks SpineLocationDisks { get; set; }

        [RadioReportId("spi_m_070366", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("spi_m_070367", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsCharacterizationIIIHemorrhage { get; set; }

        public LocalizationInTheSpinalCanalType LocalizationInTheSpinalCanalType { get; set; }

        #endregion

        #region NoMassEffect

        public LongitudinalExpansionInMyelon LongitudinalExpansionInMyelon { get; set; }

        [RadioReportId("spi_m_070468", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsPosteriorRadix { get; set; }

        [RadioReportId("spi_m_070554", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsMedullaryCone { get; set; }

        [RadioReportId("spi_m_070555", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsCaudaEquina { get; set; }

        [RadioReportId("spi_m_070245", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsArachnoidDiverticula { get; set; }

        [RadioReportId("spi_m_0704511", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SpinalCanalDifferentialDiagnosisType DifferentialDiagnosis03 { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(ClassificationDysraphyType.SimpleDysraphism) => ClassificationDysraphyType.ToString() == customConditionId,
                nameof(ClassificationDysraphyType.ComplexDysraphism) => ClassificationDysraphyType.ToString() == customConditionId,
                nameof(SpinalCanalLocations.Intramedullary) => SpinalCanalLocation.ToString() == customConditionId,
                "NOT" + nameof(SpinalCanalLocations.Intramedullary) => 
                    SpinalCanalLocation.ToString() == nameof(SpinalCanalLocations.Extramedullary) ||
                    SpinalCanalLocation.ToString() == nameof(SpinalCanalLocations.Extradural) || 
                    SpinalCanalLocation.ToString() == nameof(SpinalCanalLocations.Epidural),
                nameof(SpinalCanalLocations.Extramedullary) => SpinalCanalLocation.ToString() == customConditionId,
                nameof(SpinalCanalLocations.Extradural) => SpinalCanalLocation.ToString() == customConditionId,
                nameof(SpinalCanalLocations.Epidural) => SpinalCanalLocation.ToString() == customConditionId,
                nameof(SpinalCanalFindingType.NoMassEffect) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
