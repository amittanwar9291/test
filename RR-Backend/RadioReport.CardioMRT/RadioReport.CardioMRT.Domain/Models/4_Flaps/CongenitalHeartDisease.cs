using RadioReport.CardioMRT.Domain.Enums.Flaps;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.CardioMRT.Domain.Models
{
    public class CongenitalHeartDisease : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("car_m_040226")]
        public CongenitalHeartDiseaseFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("car_m_040435", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        [RadioReportId("car_m_040435", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        public bool IsCardiomegaly { get; set; }

        [RadioReportId("car_m_040437", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        [RadioReportId("car_m_040437", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        public bool IsDilatedPulmonaryArtery { get; set; }

        [RadioReportId("car_m_040346", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        [RadioReportId("car_m_040446", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries))]
        public bool IsVentricleSeptalDefect { get; set; }

        [RadioReportId("car_m_040447", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries))]
        [RadioReportId("car_m_040507", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        [RadioReportId("car_m_040355", InstanceName = nameof(CongenitalHeartDiseaseFindingType.EbsteinsAnomaly))]
        public bool IsAtrialSeptalDefect { get; set; }

        [RadioReportId("car_m_040449", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries))]
        [RadioReportId("car_m_040356", InstanceName = nameof(CongenitalHeartDiseaseFindingType.EbsteinsAnomaly))]
        public bool IsPersistentForamenOvale { get; set; }

        #endregion

        #region AtrialSeptalDefect

        public ArtialSeptalDefectType ArtialSeptalDefectType { get; set; }

        public SinusVenosusType SinusVenosusType { get; set; }

        [RadioReportId("car_m_040436", InstanceName = nameof(CongenitalHeartDiseaseFindingType.AtrialSeptalDefect))]
        public bool IsRARVIncrease { get; set; }

        #endregion

        #region VentricleSeptalDefect

        public VentricleSeptalDefectType VentricleSeptalDefectType { get; set; }

        [RadioReportId("car_m_040438", InstanceName = nameof(CongenitalHeartDiseaseFindingType.VentricleSeptalDefect))]
        public bool IsLALVIncrease { get; set; }

        #endregion

        #region TetralogyOfFallot

        [RadioReportId("car_m_040338", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsMembranous { get; set; }

        [RadioReportId("car_m_040339", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsRVOTObstruction { get; set; }

        [RadioReportId("car_m_040340", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsInfundibularPulmonaryStenosis { get; set; }

        [RadioReportId("car_m_040341", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsPulmonaryValveStenosis { get; set; }

        [RadioReportId("car_m_040342", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsRightVentricularHypertrophy { get; set; }

        [RadioReportId("car_m_040343", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsOverridingAorta { get; set; }

        [RadioReportId("car_m_040439", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsAortopulmonaryCollateral { get; set; }

        [RadioReportId("car_m_040440", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsRightSidedAorticArch { get; set; }

        [RadioReportId("car_m_040441", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsCoronaryArteryAnomalies { get; set; }

        [RadioReportId("car_m_040442", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsRIVALADOfTheRightCoronarySinus { get; set; }

        [RadioReportId("car_m_040443", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsPrepulmonary { get; set; }

        [RadioReportId("car_m_040444", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsPersistentLeftSuperiorVena { get; set; }

        [RadioReportId("car_m_040445", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TetralogyOfFallot))]
        public bool IsAtrioventricularSeptalDefect { get; set; }

        #endregion

        #region TranspositionOfTheGreatArteries

        public TranspositionOfTheGreatArteriesType TranspositionOfTheGreatArteriesType { get; set; }

        [RadioReportId("car_m_040448", InstanceName = nameof(CongenitalHeartDiseaseFindingType.TranspositionOfTheGreatArteries))]
        public bool IsPersistentDuctusArteriosus { get; set; }
        
        #endregion

        #region OneChamberHeart

        public OneChamberHeartSingleType OneChamberHeartSingleType { get; set; }

        public MainVentricleType MainVentricleType { get; set; }

        [RadioReportId("car_m_040453", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        public bool IsMitralValveDysplasiaAtresia { get; set; }

        [RadioReportId("car_m_040454", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        public bool IsHypoplasticAtreticLVOT { get; set; }

        [RadioReportId("car_m_040508", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        public bool IsTranspositionOfTheGreatArteries { get; set; }

        [RadioReportId("car_m_040455", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        public bool IsTricuspidalAtresia { get; set; }

        [RadioReportId("car_m_040456", InstanceName = nameof(CongenitalHeartDiseaseFindingType.OneChamberHeart))]
        public bool IsPulmonaryAtresia { get; set; }

        public AVConnectionType AVConnectionType { get; set; }

        #endregion

        #region EbsteinsAnomaly

        [RadioReportId("car_m_040354")]
        public bool IsTricuspidInsufficiency { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(OneChamberHeartSingleType.Functional) => OneChamberHeartSingleType.ToString() == customConditionId,
                nameof(OneChamberHeartSingleType.Anatomical) => OneChamberHeartSingleType.ToString() == customConditionId,
                _ => false
            };
    }
}
