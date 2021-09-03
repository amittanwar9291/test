using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums.MusclesAndTendons;

namespace RadioReport.HipMRT.Domain.Models
{
    public class MusclesAndTendonsFinding :FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("hip_m_070106")]
        public MusclesAndTendonsFindingType FindingType { get; set; }

        public PageType SideType { get; set; }

        [RadioReportId("hip_m_070420", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        [RadioReportId("hip_m_070441", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsMuscularAtrophy { get; set; }

        #endregion
        #region Musculature

        [RadioReportId("hip_m_070206", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public MusculatureLocalizationType MusculatureLocalizationType { get; set; }        
        
        public IntramuscularLocalizationType IntramuscularLocalizationType { get; set; }
        
        public PathologyType PathologyType { get; set; }
        
        public ClassificationMCStatement ClassificationMCStatement { get; set; }
        
        [RadioReportId("hip_m_070501", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsMaximumDiameterOfRuptureBelow5Mm { get; set; }
        
        [RadioReportId("hip_m_070502", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsMaximumDiameterOfRuptureAboveOrEqual5Mm { get; set; }
        
        [RadioReportId("hip_m_070505", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public int? RetractionInMm { get; set; }
        
        [RadioReportId("hip_m_070506", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsWavyCourseOfTheFibers { get; set; }
        
        [RadioReportId("hip_m_070507", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsBonyAvulsion { get; set; }
        
        public BonyAvulsionType BonyAvulsionType { get; set; }
        
        [RadioReportId("hip_m_070407", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsIntramuscular { get; set; }

        [RadioReportId("hip_m_070408", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsIntermuscular { get; set; }
        
        [RadioReportId("hip_m_070411", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public SignalType T1wSignalCharacteristics  { get; set; }
        
        [RadioReportId("hip_m_070414", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public SignalType T2wSignalCharacteristics { get; set; }
        
        public CharacterizationHaematomaType CharacterizationHaematomaType { get; set; }
        
        [RadioReportId("hip_m_070416", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsEdemaLikeSignalIntensity { get; set; }
        
        public EdemaLikeSignalIntensityType EdemaLikeSignalIntensityType { get; set; }
        
        [RadioReportId("hip_m_070419", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsFattyDegeneration { get; set; }
        
        public MuscularAtrophyType MuscularAtrophyType { get; set; }

        [RadioReportId("hip_m_070513", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsIntracorticalEdema { get; set; }

        [RadioReportId("hip_m_070519", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsApophysitis { get; set; }
        
        [RadioReportId("hip_m_070520", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsFascialTear { get; set; }
        
        [RadioReportId("hip_m_070521", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsMuscleHerniation { get; set; }
        
        [RadioReportId("hip_m_070522", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public bool IsReducedIschiofemoralDistance { get; set; }
        
        [RadioReportId("hip_m_070525", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        public int? ReducedIschiofemoralMinimumDistanceInMm { get; set; }
        
        #endregion
        #region Tendons
   
        public TendonsLocalizationType TendonsLocalizationType { get; set; }
        
        public TendonsPathologyType  TendonsPathologyType { get; set; }
        
        public RuptureLocalizationType RuptureLocalizationType { get; set; }
        
        [RadioReportId("hip_m_070427", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsRetraction { get; set; }
        
        [RadioReportId("hip_m_070430", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public int? RetractionMeasurementInMm { get; set; }
        
        [RadioReportId("hip_m_070432", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsHaematoma { get; set; }
        
        [RadioReportId("hip_m_070433", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsBoneBruise { get; set; }
        
        public TendonsMorphologyType TendonsMorphologyType { get; set; }
        
        [RadioReportId("hip_m_070437", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsPDwSignalIncrease { get; set; }
        
        [RadioReportId("hip_m_070439", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsBursitis { get; set; }
        
        [RadioReportId("hip_m_070440", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        public bool IsGanglion { get; set; }
   
        #endregion
        #region Bursitis

        public BursitisLocalizationType BursitisLocalizationType { get; set; }
        
        public BursitisMarginType BursitisMarginType { get; set; }
        
        [RadioReportId("hip_m_070312", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public int? MaxDiameterBursaInMm { get; set; }
        
        [RadioReportId("hip_m_070314", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsHemorrhage { get; set; }
        
        [RadioReportId("hip_m_070315", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsCalcifications { get; set; }
        
        [RadioReportId("hip_m_070443", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsPerifocalSoftTissueEdema { get; set; }
        
        [RadioReportId("hip_m_070444", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsSepticBursitis { get; set; }
        
        [RadioReportId("hip_m_070445", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsAbscess { get; set; }
        
        [RadioReportId("hip_m_070446", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsRupturedBursa { get; set; }
        
        [RadioReportId("hip_m_070447", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        public bool IsSecondaryOsteomyelitis { get; set; }

        #endregion
    }
}
