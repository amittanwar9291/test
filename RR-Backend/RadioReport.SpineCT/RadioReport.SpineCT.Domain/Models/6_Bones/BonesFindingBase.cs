using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Enums.Bones;

namespace RadioReport.SpineCT.Domain.Models
{

    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();
        
        [RadioReportId("spi_c_060106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("spi_c_0603217", InstanceName = nameof(BonesFindingType.MassSpine), AlternativeTranslationSuffix = "CT")]
        public BonesDiagnosisType BonesDiagnosis1 { get; set; }

        public MarginType MarginType { get; set; }

        public CortexType CortexType { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("spi_c_0602215", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsSepta { get; set; }

        [RadioReportId("spi_c_0602221", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsLiquidLevel { get; set; }

        [RadioReportId("spi_c_0602217", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsPolkaDotSign { get; set; }

        [RadioReportId("spi_c_0602214", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsSclerosis { get; set; }

        [RadioReportId("spi_c_0603240", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsInfiltrationOfAdjacentSoftTissues { get; set; }

        [RadioReportId("spi_c_0603233", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("spi_c_0603236", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsMarginalSclerosis { get; set; }

        [RadioReportId("spi_c_0604247", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsPeriostealReaction { get; set; }

        [RadioReportId("spi_c_0604250", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsSunburst { get; set; }

        [RadioReportId("spi_c_0604234", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsExtensiveVertebralHemangioma { get; set; }
    }
}
