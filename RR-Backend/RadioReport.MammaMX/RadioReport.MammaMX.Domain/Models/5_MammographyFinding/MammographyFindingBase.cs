using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;

namespace RadioReport.MammaMX.Domain.Models
{
    public class MammographyFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_mx_050106")]
        public MammographyFindingType FindingType { get; set; }

        [RadioReportId("mam_mx_050203", InstanceName = nameof(MammographyFindingType.Mass))]
        public DiagnosisType MassKnownDiagnosisType { get; set; }
        
        public FormType FormType { get; set; }

        public MarginType MarginType { get; set; }

        public DensityType DensityType { get; set; }
    }
}
