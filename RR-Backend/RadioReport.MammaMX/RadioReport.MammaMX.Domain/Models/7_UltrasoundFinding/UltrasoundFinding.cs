using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Models
{
    public class UltrasoundFinding : UltrasoundFindingBase
    {
        #region Calcification

        public CalcificationsType CalcificationsType { get; set; }

		#endregion

		#region Mass
		public DescriptionType DescriptionType { get; set; }

		[RadioReportId("mam_mx_070205", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsHistologicallyConfirmed { get; set; }

		public HistologicallySecuredType HistologicallySecuredType { get; set; }

		[RadioReportId("mam_mx_070209", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public Locations Location { get; set; }

		[RadioReportId("mam_mx_070306", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public int? DiameterInMm { get; set; }

		[RadioReportId("mam_mx_070309", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public int? SizeOfSecondLayerInMm { get; set; }

		[RadioReportId("mam_mx_070312", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public int? SizeOfThirdLayerInMm { get; set; }

		[RadioReportId("mam_mx_070319", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public int? DistanceToNippleInMm { get; set; }

		public OrientationType OrientationType { get; set; }

		[RadioReportId("mam_mx_070407", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsIndistinct { get; set; }

		[RadioReportId("mam_mx_070408", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsAngularMargins { get; set; }

		[RadioReportId("mam_mx_070409", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsMicrolobulated { get; set; }

		[RadioReportId("mam_mx_070410", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsSpiculated { get; set; }

		public EchoPatternType EchoPatternType { get; set; }

		public DeformabilityCompressionType DeformabilityCompressionType { get; set; }

		public MovabilityType MovabilityType { get; set; }

		[RadioReportId("mam_mx_070416", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public MassDiagnosisType DifferentialDiagnosis1 { get; set; }

		[RadioReportId("mam_mx_070417", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsSuspectedOfDifferentialDiagnosis1 { get; set; }

		[RadioReportId("mam_mx_070419", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public MassDiagnosisType DifferentialDiagnosis2 { get; set; }

		[RadioReportId("mam_mx_070420", InstanceName = nameof(UltrasoundFindingType.Mass))]
		public bool IsSubordinated { get; set; }
		#endregion
    }
}
