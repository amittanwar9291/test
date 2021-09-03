using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineMRT.Domain.Enums.SoftTissues;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SoftTissuesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_m_080106")]
        public SoftTissuesFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_m_080402", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080315", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public SoftTissuesDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("spi_m_080404", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080317", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        [RadioReportId("spi_m_080368", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public SignalType SignalT1w { get; set; }

        [RadioReportId("spi_m_080406", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080319", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        [RadioReportId("spi_m_080370", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public SignalType SignalT2w { get; set; }

        [RadioReportId("spi_m_080512-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("spi_m_080512-l", InstanceName = nameof(CMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType CMEnhancementHomogeneityType { get; set; }

        [RadioReportId("spi_m_080410", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080410", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsMoreThanOneLesion { get; set; }

        public HematomaCharacterizationType HematomaCharacterizationType { get; set; }

        #endregion

        #region ParaspinalSpace

        [RadioReportId("spi_m_080408", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsHypointensAfterFatSaturation { get; set; }

        [RadioReportId("spi_m_080409", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsIsointenseToCerebrospinalFluid { get; set; }

        [RadioReportId("spi_m_080509", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsMirrorFormation { get; set; }

        [RadioReportId("spi_m_080510", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("spi_m_080511", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("spi_m_080212", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        [RadioReportId("spi_m_080213", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsCommunicationWithIntraduralSpace { get; set; }

        #endregion

        #region IntraduralExtramedullarySpace

        [RadioReportId("spi_m_080417", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsSepta { get; set; }

        [RadioReportId("spi_m_080418", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsThickeningOfTheNerve { get; set; }

        [RadioReportId("spi_m_080419", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("spi_m_080420", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("spi_m_080421", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsTargetSign { get; set; }

        [RadioReportId("spi_m_080517", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsHourglassShape { get; set; }

        [RadioReportId("spi_m_080518", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsSpindleShaped { get; set; }

        public NeurofibromatosisType NeurofibromatosisType { get; set; }

        [RadioReportId("spi_m_080425", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        public bool IsSuspicionOf { get; set; }

        #endregion
    }
}
