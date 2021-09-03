using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.CardioMRT.Domain.Models
{
    public class SpatialRequirementFindingBase: FindingBase
	{
        public override string InstanceName => FindingType.ToString();

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("car_m_080106")]
		public SpatialRequirementFindingType FindingType { get; set; }

		[RadioReportId("car_m_080303")]
		public SpatialRequirementDiagnosisType DifferentialDiagnosis01 { get; set; }

		[RadioReportId("car_m_080305")]
		public SignalType SignalT1wCharacteristics { get; set; }

		[RadioReportId("car_m_080307")]
		public SignalType SignalT2wCharacteristics { get; set; }

        [RadioReportId("car_m_080405", IsExportable = false, InstanceName = nameof(MarginType))]
		public MarginType MarginType { get; set; } 

		[RadioReportId("car_m_080403-l", IsExportable = false, InstanceName = nameof(HomogeneityType))]
		public HomogeneityType HomogeneityType { get; set; }

		[RadioReportId("car_m_080501", InstanceName = nameof(ContrastEnhancementPerfusionType), IsExportable = false)]
		public EnhancementType ContrastEnhancementPerfusionType { get; set; }

        [RadioReportId("car_m_080504", InstanceName = nameof(ContrastEnhancementIntensityPerfusionType), IsExportable = false)]
        public EnhancementIntensityType ContrastEnhancementIntensityPerfusionType { get; set; }
        
        [RadioReportId("car_m_080507", InstanceName = nameof(ContrastEnhancementQualityPerfusionType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementQualityPerfusionType { get; set; }
        
		[RadioReportId("car_m_080208", InstanceName = nameof(GdEnhancementEGEType), IsExportable = false)]
		public EnhancementType GdEnhancementEGEType { get; set; }
        
        [RadioReportId("car_m_080214", InstanceName = nameof(GdEnhancementQualityEGEType), IsExportable = false)]
        public HomogeneityType GdEnhancementQualityEGEType { get; set; }

		[RadioReportId("car_m_080309", InstanceName = nameof(GdEnhancementLGEType), IsExportable = false)]
		public EnhancementType GdEnhancementLGEType { get; set; }

		[RadioReportId("car_m_080410")]
		public bool IsBleeding { get; set; }

		[RadioReportId("car_m_080411")]
		public bool IsNecrosis { get; set; }

		[RadioReportId("car_m_080412")]
		public bool IsCalcification { get; set; }

		[RadioReportId("car_m_080413")]
		public bool IsFatSignal { get; set; }

		[RadioReportId("car_m_080414")]
		public bool IsHyperIntensitySTIR { get; set; }

		[RadioReportId("car_m_080416")]
		public bool IsValveAssociated { get; set; }
	}
}
