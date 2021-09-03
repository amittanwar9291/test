using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Enums.SoftTissues;

namespace RadioReport.SpineCT.Domain.Models
{
    public class SoftTissuesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_c_080106", AlternativeTranslationSuffix = "CT")]
        public SoftTissuesFindingType FindingType { get; set; }

        [RadioReportId("spi_c_0802302", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass), AlternativeTranslationSuffix = "CT")]
        public SoftTissuesDiagnosisType DifferentialDiagnosis { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("spi_c_0802315", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("spi_c_0802316", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsCapsuleOrMembrane { get; set; }

        [RadioReportId("spi_c_0802307", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_c_0803395", InstanceName = nameof(SoftTissuesFindingType.ParavertebralMuscles))]
        public bool IsCalcification { get; set; }

        [RadioReportId("spi_c_0804315", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsSurroundinginflammatoryReaction { get; set; }

        [RadioReportId("spi_c_0804316", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        public bool IsCommunicationWithTheIntraduralSpace { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
    }
}
