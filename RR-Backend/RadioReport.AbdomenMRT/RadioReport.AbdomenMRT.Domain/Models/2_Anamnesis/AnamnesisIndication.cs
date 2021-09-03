using RadioReport.AbdomenMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class AnamnesisIndication : FindingBase
    {
        public override string InstanceName => IndicationType.ToString();

        [RadioReportId("abd_m_020215")]
        public AnamnesisIndicationType IndicationType { get; set; }

		#region Common

		public DetailsType DetailsType { get; set; }

		[RadioReportId("abd_m_020318", InstanceName = nameof(AnamnesisIndicationType.Mass))]
		[RadioReportId("abd_m_020327", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		[RadioReportId("abd_m_020334", InstanceName = nameof(AnamnesisIndicationType.Concrement))]
		[RadioReportId("abd_m_020345", InstanceName = nameof(AnamnesisIndicationType.Trauma))]
		[RadioReportId("abd_m_020358", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public OrganRegionType OrganRegionType { get; set; }

		#region OrganRegions

		#region Liver
		public LiverLocalizationType LiverLocalizationType { get; set; }

		[RadioReportId("abd_m_020419")]
		public bool IsRightLobeOfLiver { get; set; }

		[RadioReportId("abd_m_020420")]
		public bool IsLeftLobeOfLiver { get; set; }

		[RadioReportId("abd_m_020421")]
		public bool IsCaudateLobe { get; set; }

		[RadioReportId("abd_m_020422")]
		public bool IsQuadrateLobe { get; set; }
		
		[RadioReportId("abd_m_020424")]
		public LiverSegmentsLocalizationType LiverSegmentsLocalizationType { get; set; }

		#endregion

		#region Kidney

		[RadioReportId("abd_m_020428", InstanceName = nameof(AnamnesisIndicationType.Mass))]
		[RadioReportId("abd_m_020428", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		[RadioReportId("abd_m_020441", InstanceName = nameof(AnamnesisIndicationType.Concrement))]
		[RadioReportId("abd_m_020428", InstanceName = nameof(AnamnesisIndicationType.Trauma))]
		[RadioReportId("abd_m_020428", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsRight { get; set; }

		[RadioReportId("abd_m_020429", InstanceName = nameof(AnamnesisIndicationType.Mass))]
		[RadioReportId("abd_m_020429", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		[RadioReportId("abd_m_020442", InstanceName = nameof(AnamnesisIndicationType.Concrement))]
		[RadioReportId("abd_m_020429", InstanceName = nameof(AnamnesisIndicationType.Trauma))]
		[RadioReportId("abd_m_020429", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsLeft { get; set; }

		#endregion

		#region GastrointestinalTract

		[RadioReportId("abd_m_020431")]
		public bool IsEsophagus { get; set; }

		[RadioReportId("abd_m_020432")]
		public bool IsStomach { get; set; }

		[RadioReportId("abd_m_020433")]
		public bool IsDuodenum { get; set; }

		[RadioReportId("abd_m_020434")]
		public bool IsJejunum { get; set; }

		[RadioReportId("abd_m_020435")]
		public bool IsIleum { get; set; }

		[RadioReportId("abd_m_020436")]
		public bool IsColon { get; set; }

		[RadioReportId("abd_m_020437")]
		public bool IsSigma { get; set; }

		[RadioReportId("abd_m_020438")]
		public bool IsRectum { get; set; }

		[RadioReportId("abd_m_020439")]
		public bool IsAnus { get; set; }

		#endregion

		#endregion

		#endregion

		#region Inflammation
		
		[RadioReportId("abd_m_020320", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		public bool IsAbscess { get; set; }

		[RadioReportId("abd_m_020321", InstanceName = nameof(AnamnesisIndicationType.Inflammation))]
		public bool IsFistulaFormation { get; set; }

		#endregion

		#region AnastomosisOrganRegion

		public AnastomosisOrganRegionType AnastomosisOrganRegionType { get; set; }

		#endregion

		#region FollowUpAfterTherapy
		
		[RadioReportId("abd_m_020348", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public byte? MonthOfFollowUpAfterTherapy { get; set; }

		[RadioReportId("abd_m_020349", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public int? YearOfFollowUpAfterTherapy { get; set; }

		[RadioReportId("abd_m_020350", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsPostoperative { get; set; }
		
		[RadioReportId("abd_m_020351", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsResection { get; set; }

		[RadioReportId("abd_m_020352", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsPartialResection { get; set; }

		[RadioReportId("abd_m_020353", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsChemotherapy { get; set; }

		[RadioReportId("abd_m_020354", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsRadio { get; set; }

		[RadioReportId("abd_m_020355", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsBiopsy { get; set; }

		[RadioReportId("abd_m_020356", InstanceName = nameof(AnamnesisIndicationType.FollowUpAfterTherapy))]
		public bool IsStenting { get; set; }

		#endregion
    }
}