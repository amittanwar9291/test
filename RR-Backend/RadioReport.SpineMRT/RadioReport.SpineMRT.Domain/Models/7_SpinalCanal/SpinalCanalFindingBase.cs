using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SpinalCanalFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_m_070106")]
        public SpinalCanalFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_m_070404", InstanceName = nameof(SpinalCanalFindingType.DevelopmentalDisorderOrMalformation))]
        [RadioReportId("spi_m_070432", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070448", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070389", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("spi_m_0703202", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_0703202", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SpinalCanalDifferentialDiagnosisType SpinalCanalDifferentialDiagnosisType { get; set; }

        public LocalizationInTheSpinalCordType LocalizationInTheSpinalCordType { get; set; }

        [RadioReportId("spi_m_070426-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("spi_m_070482", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070252", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070252", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SignalType T1wSignal { get; set; }

        [RadioReportId("spi_m_070483", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070251", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070251", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public SignalType T2wSignal { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("spi_m_070217-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("spi_m_070342", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070543", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070243", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsSwelling { get; set; }

        [RadioReportId("spi_m_070347", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070231", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070246", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsSerpiginousVascularStructures { get; set; }

        [RadioReportId("spi_m_070348", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070232", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070247", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsFlowVoids { get; set; }

        [RadioReportId("spi_m_070237", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070248", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsClottedNerveRoots { get; set; }

        [RadioReportId("spi_m_070238", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070249", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsEmptyDuralSac { get; set; }

        [RadioReportId("spi_m_070360", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        [RadioReportId("spi_m_070250", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsSeptationInTheSubarachnoidSpace { get; set; }

        #endregion

        #region MassEffect

        [RadioReportId("spi_m_070213", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public SpinalCanalLocations SpinalCanalLocation { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("spi_m_070523", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070353", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsT2wHypointenseRim { get; set; }

        [RadioReportId("spi_m_070524", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070354", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsT1wHeterogeneousSignalIntensity { get; set; }

        [RadioReportId("spi_m_070525", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070355", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsCalcification { get; set; }

        [RadioReportId("spi_m_070526", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070356", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("spi_m_070527", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070357", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsHypointenseAfterFatSaturation  { get; set; }

        [RadioReportId("spi_m_070528", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070359", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsSTIROrTIRMHyperintense { get; set; }

        [RadioReportId("spi_m_070343", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsCystSyrinx { get; set; }

        [RadioReportId("spi_m_070344", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsCentralCavityFormation { get; set; }

        [RadioReportId("spi_m_070345", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsEdema { get; set; }

        [RadioReportId("spi_m_070349", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070233", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = "NOT" + nameof(SpinalCanalLocations.Intramedullary))]
        public bool IsNumerousVessels { get; set; }

        [RadioReportId("spi_m_070350", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsUsuringOrRemodellingSpinalCanal { get; set; }

        [RadioReportId("spi_m_070351", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Intramedullary))]
        [RadioReportId("spi_m_070361", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        public bool IsLeptomeningealSpread { get; set; }

        [RadioReportId("spi_m_070440", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsIntraAndExtradural { get; set; }

        [RadioReportId("spi_m_070544", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsDisplacement { get; set; }

        [RadioReportId("spi_m_070545", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsCompression { get; set; }

        [RadioReportId("spi_m_070362", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070373", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070373", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        public bool IsScaloppingOrThinnedPedicle { get; set; }

        [RadioReportId("spi_m_070363", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extramedullary))]
        [RadioReportId("spi_m_070374", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Epidural))]
        [RadioReportId("spi_m_070374", InstanceName = nameof(SpinalCanalFindingType.MassEffect), CustomConditionName = nameof(SpinalCanalLocations.Extradural))]
        public bool IsExtendedNeuralForamen { get; set; }

        [RadioReportId("spi_m_070551", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsWideningEpiduralFatTissueMoreThan7Mm { get; set; }

        [RadioReportId("spi_m_070552", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsDeformationOfTheDuralSac { get; set; }

        [RadioReportId("spi_m_070377", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsEpiduralReaction { get; set; }

        [RadioReportId("spi_m_070358", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsLiquorisointense { get; set; }

        [RadioReportId("spi_m_070378", InstanceName = nameof(SpinalCanalFindingType.MassEffect))]
        public bool IsFatIsointens { get; set; }

        #endregion

        #region NoMassEffect

        public QuantityTransverseType QuantityTransverseType { get; set; }

        [RadioReportId("spi_m_070466", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsIntramedullaryFocal { get; set; }

        [RadioReportId("spi_m_070467", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsAnteriorRadix { get; set; }

        [RadioReportId("spi_m_070469", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsPial { get; set; }

        public PialType PialType { get; set; }

        [RadioReportId("spi_m_070472", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsSubarachnoid { get; set; }

        [RadioReportId("spi_m_070473", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsEpidural { get; set; }

        [RadioReportId("spi_m_070240", InstanceName = nameof(SpinalCanalFindingType.NoMassEffect))]
        public bool IsAberrantCourse { get; set; }

        public AberrantCourseType AberrantCourseType { get; set; }

        #endregion

    }
}
