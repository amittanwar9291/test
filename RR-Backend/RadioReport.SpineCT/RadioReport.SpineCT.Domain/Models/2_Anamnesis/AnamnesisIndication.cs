using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Enums;

namespace RadioReport.SpineCT.Domain.Models
{
    public class AnamnesisIndication : FindingBase
	{
        public override string InstanceName => AnamnesisIndicationType.ToString();

		[RadioReportId("spi_c_020105")]
		public AnamnesisIndicationType AnamnesisIndicationType { get; set; }

        #region Lumbago

        [RadioReportId("spi_c_020202", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsRadiculopathy { get; set; }

        [RadioReportId("spi_c_020203", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsRadiculopathyRight { get; set; }

        [RadioReportId("spi_c_020204", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsRadiculopathyLeft { get; set; }

        [RadioReportId("spi_c_020205", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsPseudoradicularSymptoms { get; set; }

        [RadioReportId("spi_c_020206", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsPseudoradicularSymptomsRight { get; set; }

        [RadioReportId("spi_c_020207", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsPseudoradicularSymptomsLeft { get; set; }

        [RadioReportId("spi_c_020208", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsDiffuseLumbago { get; set; }

        [RadioReportId("spi_c_020209", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsDiffuseLumbagoRight { get; set; }

        [RadioReportId("spi_c_020210", InstanceName = nameof(AnamnesisIndicationType.Lumbago))]
        public bool IsDiffuseLumbagoLeft { get; set; }

        #endregion

        #region Neurology

        [RadioReportId("spi_c_020213", InstanceName = nameof(AnamnesisIndicationType.Neurology))]
        public SpineLocationBones SpineLocationBones { get; set; }

        [RadioReportId("spi_c_020215", InstanceName = nameof(AnamnesisIndicationType.Neurology))]
        public bool IsPain { get; set; }

        [RadioReportId("spi_c_020216", InstanceName = nameof(AnamnesisIndicationType.Neurology))]
        public bool IsMotorDeficit { get; set; }

        [RadioReportId("spi_c_020217", InstanceName = nameof(AnamnesisIndicationType.Neurology))]
        public bool IsSensoryDeficit { get; set; }

        [RadioReportId("spi_c_020218", InstanceName = nameof(AnamnesisIndicationType.Neurology))]
        public bool IsConusCaudaSyndrome { get; set; }

        #endregion

        #region VertebralBodyFracture

        [RadioReportId("spi_c_020220", InstanceName = nameof(AnamnesisIndicationType.VertebralBodyFracture))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("spi_c_020222", InstanceName = nameof(AnamnesisIndicationType.VertebralBodyFracture))]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_c_020223", InstanceName = nameof(AnamnesisIndicationType.VertebralBodyFracture))]
        public bool IsTrauma { get; set; }

        [RadioReportId("spi_c_020224", InstanceName = nameof(AnamnesisIndicationType.VertebralBodyFracture))]
        public bool IsMinorInjury { get; set; }

        [RadioReportId("spi_c_020226", InstanceName = nameof(AnamnesisIndicationType.VertebralBodyFracture))]
        public byte MonthOfVertebralBodyFracture { get; set; }

        [RadioReportId("spi_c_020227", InstanceName = nameof(AnamnesisIndicationType.VertebralBodyFracture))]
        public int YearOfVertebralBodyFracture { get; set; }

        #endregion

        #region IntracranialHypotensionSyndrome

        public IntracranialHypotensionSyndromeType IntracranialHypotensionSyndromeType { get; set; }

        [RadioReportId("spi_c_020232", InstanceName = nameof(AnamnesisIndicationType.IntracranialHypotensionSyndrome))]
        public bool IsCSFLeakage { get; set; }

        #endregion
    }
}
