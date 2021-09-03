using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;

namespace RadioReport.MammaMX.Domain.Models
{
    public class UltrasoundFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

		[RadioReportId("mam_mx_070106")]
        public UltrasoundFindingType FindingType { get; set; }

		[RadioReportId("mam_mx_070204", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public MassDiagnosisType DifferentialDiagnosis { get; set; }

		[RadioReportId("mam_mx_070210", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsPartiallyWithinTheSkin { get; set; }

		public FormType FormType { get; set; }

		public MarginEchodelimitationType MarginEchodelimitationType { get; set; }

		public EchoContentType EchoContentType { get; set; }

		public ExitEchodorsalSoundPatternsType ExitEchodorsalSoundPatternsType { get; set; }

		public EnvironmentalReactionType EnvironmentalReactionType { get; set; }

		public VascularDrawingLesionType VascularDrawingLesionType { get; set; }
    }
}
