
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries; 

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class CoronaryArteriesFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_040106")]
        public CoronaryArteriesFindingType FindingType { get; set; }

        #region Common
        
		public NoStenosisType NoStenosisType { get; set; }

		[RadioReportId("ang_c_040340", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		[RadioReportId("ang_c_040213", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040213", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040213", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsRiva { get; set; }

		[RadioReportId("ang_c_040211", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040211", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040211", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsLeftCoronaryArtery { get; set; }

		[RadioReportId("ang_c_040212", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040212", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040212", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment5 { get; set; }

		[RadioReportId("ang_c_040214", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040214", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040214", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment6 { get; set; }

		[RadioReportId("ang_c_040215", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040215", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040215", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment7 { get; set; }

		[RadioReportId("ang_c_040216", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040216", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040216", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment8 { get; set; }

		[RadioReportId("ang_c_040217", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040217", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040217", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment9D1 { get; set; }

		[RadioReportId("ang_c_040218", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040218", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040218", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment10D2 { get; set; }

		[RadioReportId("ang_c_040219", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040219", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040219", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment17RamusIntermedius { get; set; }

		[RadioReportId("ang_c_040347", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040347", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040347", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsLcx { get; set; }

		[RadioReportId("ang_c_040348", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040348", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040348", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment11 { get; set; }

		[RadioReportId("ang_c_040349", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040349", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040349", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment12Om1 { get; set; }

		[RadioReportId("ang_c_040350", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040350", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040350", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment13 { get; set; }

		[RadioReportId("ang_c_040351", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040351", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040351", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment14Om2 { get; set; }

		[RadioReportId("ang_c_040352", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040352", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040352", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment15LPda { get; set; }

		[RadioReportId("ang_c_040353", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040353", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040353", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment18LPlb { get; set; }

		[RadioReportId("ang_c_040401", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040401", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040401", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsRightCoronaryArtery { get; set; }

		[RadioReportId("ang_c_040402", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040402", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040402", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment1 { get; set; }

		[RadioReportId("ang_c_040403", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040403", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040403", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment2 { get; set; }

		[RadioReportId("ang_c_040404", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040404", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040404", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment3 { get; set; }

		[RadioReportId("ang_c_040405", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040405", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040405", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment4RPda { get; set; }

		[RadioReportId("ang_c_040406", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		[RadioReportId("ang_c_040406", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040406", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsSegment16RPlb { get; set; }

        #endregion

        #region CoronaryArterialDominance

		public CoronaryArterialDominanceType CoronaryArterialDominanceType { get; set; }

		[RadioReportId("ang_c_040301", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryArterialDominance))]
		public bool IsRightSuperDominant { get; set; }

        #endregion

        #region CoronaryAnomaly

		[RadioReportId("ang_c_040207", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		public CoronaryAnomalyType CoronaryAnomalyType { get; set; }

		[RadioReportId("ang_c_040305", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		public bool IsBlandWhiteGarlandSyndrome { get; set; }

        [RadioReportId("ang_c_040306", InstanceName = nameof(CoronaryArteriesFinding.RcaFromLeftCoronarySinusType), IsExportable = false)]
		public CourseType RcaFromLeftCoronarySinusType { get; set; }

        [RadioReportId("ang_c_040311", InstanceName = nameof(CoronaryArteriesFinding.CourseRcxType), IsExportable = false)]
		public CourseType CourseRcxType { get; set; }

        [RadioReportId("ang_c_040316", InstanceName = nameof(CoronaryArteriesFinding.CourseRivaType), IsExportable = false)]
		public CourseType CourseRivaType { get; set; }

        [RadioReportId("ang_c_040321", InstanceName = nameof(CoronaryArteriesFinding.LcaFromRightCoronarySinusType), IsExportable = false)]
		public CourseType LcaFromRightCoronarySinusType { get; set; }

		public RightToLeftShuntType RightToLeftShuntType { get; set; }

		public OtherDrainageType OtherDrainageType { get; set; }

		[RadioReportId("ang_c_040338", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		public bool IsRca { get; set; }

		[RadioReportId("ang_c_040339", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		public bool IsLca { get; set; }

		[RadioReportId("ang_c_040341", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		public bool IsRcx { get; set; }

        #endregion

        #region Calcification

		[RadioReportId("ang_c_040209", InstanceName = nameof(CoronaryArteriesFindingType.Calcification))]
		public int? AgatstonScore { get; set; }

		public GradingType GradingType { get; set; }

        #endregion

        #region StenosisOcclusion

		[RadioReportId("ang_c_040503", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsNNonDiagnostic { get; set; }

		[RadioReportId("ang_c_040504", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsSStents { get; set; }

		[RadioReportId("ang_c_040505", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsGImplants { get; set; }

		[RadioReportId("ang_c_040506", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsVVulnerablePlaques { get; set; }

		[RadioReportId("ang_c_040507", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsHypodensePlaques { get; set; }

		[RadioReportId("ang_c_040508", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsPositiveRemodeling { get; set; }

		[RadioReportId("ang_c_040509", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsSpottyCalcification { get; set; }

		[RadioReportId("ang_c_040510", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsNapkinRingSign { get; set; }
		
		[RadioReportId("ang_c_040512", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public StenosisType StenosisType { get; set; }

		[RadioReportId("ang_c_040513", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public bool IsIndexLesion { get; set; }

		[RadioReportId("ang_c_040515", InstanceName = nameof(CoronaryArteriesFindingType.StenosisOcclusion))]
		public CADRADSScoreType CADRADSScoreType { get; set; }

		#endregion

		#region ExtracoronaryIntracardiacFindings
		
		[RadioReportId("ang_c_040222", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsRightEnlargementAtrium { get; set; }

		[RadioReportId("ang_c_040223", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsRightEnlargementVentricle { get; set; }

		[RadioReportId("ang_c_040224", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsRightMyocardialHypertrophy { get; set; }

		[RadioReportId("ang_c_040225", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsVenousContrastReflux { get; set; }

		[RadioReportId("ang_c_040226", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsRightVentricularDiverticulum { get; set; }

		[RadioReportId("ang_c_040228", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public int? RightVentricularDiverticulumMaxDiameterInMm { get; set; }

		[RadioReportId("ang_c_040355", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsLeftEnlargementAtrium { get; set; }

		[RadioReportId("ang_c_040356", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsLeftEnlargementVentricle { get; set; }

		[RadioReportId("ang_c_040357", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsLeftMyocardialHypertrophy { get; set; }

		[RadioReportId("ang_c_040358", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsThrombus { get; set; }
		
		[RadioReportId("ang_c_040359", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsLeftAtrium { get; set; }

		[RadioReportId("ang_c_040360", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsLeftVentricularDiverticulum { get; set; }

		[RadioReportId("ang_c_040362", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public int? LeftVentricularDiverticulumMaxDiameterInMm { get; set; }
		
		[RadioReportId("ang_c_040408", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsEffusion { get; set; }

		[RadioReportId("ang_c_040410", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public int? EffusionMaxDiameterInMm { get; set; }

		[RadioReportId("ang_c_040412", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsMass { get; set; }

		[RadioReportId("ang_c_040414", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public int? MassMaxDiameterInMm { get; set; }

		[RadioReportId("ang_c_040416", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsPneumopericardium { get; set; }

		[RadioReportId("ang_c_040417", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsCalcification { get; set; }

		[RadioReportId("ang_c_040418", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsPericarditisConstrictiva { get; set; }

		[RadioReportId("ang_c_040517", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsAtrialSeptalDefect { get; set; }

		[RadioReportId("ang_c_040518", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsPatentForamenOvale { get; set; }

		[RadioReportId("ang_c_040519", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsVentricularSeptalDefect { get; set; }

		[RadioReportId("ang_c_040520", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsVentricularSeptalAneurysm { get; set; }

		[RadioReportId("ang_c_040521", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsSeptumVentricularDiverticulum { get; set; }

		[RadioReportId("ang_c_040523", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public int? SeptumVentricularDiverticulumMaxDiameterInMm { get; set; }

		[RadioReportId("ang_c_040526", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsBicuspidAorticValve { get; set; }

		[RadioReportId("ang_c_040527", InstanceName = nameof(CoronaryArteriesFindingType.ExtracoronaryIntracardiacFindings))]
		public bool IsCalcifications { get; set; }

        #endregion
        
        #region FollowUpAfterBypass

		[RadioReportId("ang_c_040531", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		public bool IsAnastomoticStenosis { get; set; }

		[RadioReportId("ang_c_040534", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		public bool IsCoronaryFistula { get; set; }

        #endregion
        
        #region FollowUpAfterStent

		[RadioReportId("ang_c_040540", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		public bool IsLimited { get; set; }

        #endregion
    }
}
