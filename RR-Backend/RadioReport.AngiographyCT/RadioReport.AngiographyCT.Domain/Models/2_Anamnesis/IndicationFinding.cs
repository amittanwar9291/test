using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.CoronaryArteryDisease;
using RadioReport.AngiographyCT.Domain.Enums.PeripheralArteryDiseasePAD;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class IndicationFinding: FindingBase
    {
        public override string InstanceName => IndicationFindingType.ToString();
        
        [RadioReportId("ang_c_020105")]
        public IndicationFindingType IndicationFindingType { get; set; }
        
        #region Common

        [RadioReportId("ang_c_020203", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        [RadioReportId("ang_c_020217", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        [RadioReportId("ang_c_020219", InstanceName = nameof(IndicationFindingType.AorticCoarctationCoA))]
        [RadioReportId("ang_c_020219", InstanceName = nameof(IndicationFindingType.Vasculitis))]
        [RadioReportId("ang_c_020221", InstanceName = nameof(IndicationFindingType.PenetratingAorticUlcer))]
        [RadioReportId("ang_c_020221", InstanceName = nameof(IndicationFindingType.IntramuralHematoma))]
        [RadioReportId("ang_c_020221", InstanceName = nameof(IndicationFindingType.AorticDissection))]

        public bool IsSuspiciousFor { get; set; }
        
        [RadioReportId("ang_c_020212", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        [RadioReportId("ang_c_020224", InstanceName = nameof(IndicationFindingType.PenetratingAorticUlcer))]
        [RadioReportId("ang_c_020224", InstanceName = nameof(IndicationFindingType.IntramuralHematoma))]
        [RadioReportId("ang_c_020224", InstanceName = nameof(IndicationFindingType.AorticDissection))]
        public int? OnsetOfSymptomsMonth { get; set; }
        
        [RadioReportId("ang_c_020213", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        [RadioReportId("ang_c_020225", InstanceName = nameof(IndicationFindingType.PenetratingAorticUlcer))]
        [RadioReportId("ang_c_020225", InstanceName = nameof(IndicationFindingType.IntramuralHematoma))]
        [RadioReportId("ang_c_020225", InstanceName = nameof(IndicationFindingType.AorticDissection))]
        public int? OnsetOfSymptomsYear { get; set; }
        
        #endregion

        #region PeripheralArteryDiseasePAD

        public StadiumAccordingToFontaineType StadiumAccordingToFontaineType { get; set; }

        [RadioReportId("ang_c_020215", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsSuspectedVascularStenosis { get; set; }
        
        [RadioReportId("ang_c_020303", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsAbdominalAorta { get; set; }
        
        [RadioReportId("ang_c_020305", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsSuprarenal { get; set; }
        
        [RadioReportId("ang_c_020306", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsInfrarenal { get; set; }
        
        [RadioReportId("ang_c_020307", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsAorticBifurcation { get; set; }
        
        #region Right
        
        [RadioReportId("ang_c_020402", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightRenalArtery{ get; set; }
        
        [RadioReportId("ang_c_020403", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightCommonIliacArtery{ get; set; }
        
        [RadioReportId("ang_c_020404", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightExternalIliacArtery{ get; set; }
        
        [RadioReportId("ang_c_020405", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightInternalIliacArtery{ get; set; }
        
        [RadioReportId("ang_c_020406", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightCommonFemoralArtery{ get; set; }
        
        [RadioReportId("ang_c_020407", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightFemoralArteryBifurcation{ get; set; }
        
        [RadioReportId("ang_c_020408", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightSuperficialFemoralArtery{ get; set; }
        
        [RadioReportId("ang_c_020409", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightProfundaFemorisArtery{ get; set; }
        
        [RadioReportId("ang_c_020410", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightPoplitealArtery{ get; set; }
        
        [RadioReportId("ang_c_020411", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightAnteriorTibialArtery{ get; set; }
        
        [RadioReportId("ang_c_020412", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightTruncusTibiofibularis{ get; set; }
        
        [RadioReportId("ang_c_020413", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightPosteriorTibialArtery{ get; set; }
        
        [RadioReportId("ang_c_020414", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightFibularArtery{ get; set; }
        
        [RadioReportId("ang_c_020415", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightDorsalisPedisArtery{ get; set; }
        
        [RadioReportId("ang_c_020416", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsRightArcusPlantaris{ get; set; }
        
        #endregion
        
        #region Left
        
        [RadioReportId("ang_c_020502", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftRenalArtery{ get; set; }
        
        [RadioReportId("ang_c_020503", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftCommonIliacArtery{ get; set; }
        
        [RadioReportId("ang_c_020504", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftExternalIliacArtery{ get; set; }
        
        [RadioReportId("ang_c_020505", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftInternalIliacArtery{ get; set; }
        
        [RadioReportId("ang_c_020506", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftCommonFemoralArtery{ get; set; }
        
        [RadioReportId("ang_c_020507", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftFemoralArteryBifurcation{ get; set; }
        
        [RadioReportId("ang_c_020508", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftSuperficialFemoralArtery{ get; set; }
        
        [RadioReportId("ang_c_020509", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftProfundaFemorisArtery{ get; set; }
        
        [RadioReportId("ang_c_020510", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftPoplitealArtery{ get; set; }
        
        [RadioReportId("ang_c_020511", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftAnteriorTibialArtery{ get; set; }
        
        [RadioReportId("ang_c_020512", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftTruncusTibiofibularis{ get; set; }
        
        [RadioReportId("ang_c_020513", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftPosteriorTibialArtery{ get; set; }
        
        [RadioReportId("ang_c_020514", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftFibularArtery{ get; set; }
        
        [RadioReportId("ang_c_020515", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftDorsalisPedisArtery{ get; set; }
        
        [RadioReportId("ang_c_020516", InstanceName = nameof(IndicationFindingType.PeripheralArteryDiseasePAD))]
        public bool IsLeftArcusPlantaris{ get; set; }
        
        #endregion

        #endregion
        
        #region Aneurysm
        
        [RadioReportId("ang_c_020309", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsIntracranial { get; set; }

        [RadioReportId("ang_c_020310", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsCervical { get; set; }
        
        [RadioReportId("ang_c_020311", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsCervicalRight { get; set; }
        
        [RadioReportId("ang_c_020312", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsCervicalLeft { get; set; }

        [RadioReportId("ang_c_020313", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsUpperLimb { get; set; }
        
        [RadioReportId("ang_c_020314", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsUpperLimbRight { get; set; }
        
        [RadioReportId("ang_c_020315", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsUpperLimbLeft { get; set; }
        
        [RadioReportId("ang_c_020316", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsChest { get; set; }
        
        [RadioReportId("ang_c_020317", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsAbdomen { get; set; }
        
        [RadioReportId("ang_c_020318", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsLowerLimb { get; set; }
        
        [RadioReportId("ang_c_020319", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsLowerLimbRight { get; set; }
        
        [RadioReportId("ang_c_020320", InstanceName = nameof(IndicationFindingType.Aneurysm))]
        public bool IsLowerLimbLeft { get; set; }
        
        #endregion
        
        #region CoronaryArteryDisease
        
        [RadioReportId("ang_c_020227", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsAnginaPectoris { get; set; }
        
        public AnginaPectorisType AnginaPectorisType { get; set; }
        
        public PreviousDiseaseType PreviousDiseaseType { get; set; }
        
        [RadioReportId("ang_c_020325", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public int? PretestProbabilityCADInPercent { get; set; }
        
        [RadioReportId("ang_c_020417", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsStressTestingPerformed { get; set; }
        
        [RadioReportId("ang_c_020419", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsECG { get; set; }
        
        [RadioReportId("ang_c_020420", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsEchocardiography { get; set; }
        
        [RadioReportId("ang_c_020421", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsMyocardialScintigraphySPECT { get; set; }
        
        [RadioReportId("ang_c_020422", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsPET { get; set; }
        
        [RadioReportId("ang_c_020423", InstanceName = nameof(IndicationFindingType.CoronaryArteryDisease))]
        public bool IsCT { get; set; }
        
        #endregion
        
        #region RiskFactors
        
        [RadioReportId("ang_c_020231", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsArterialHypertension { get; set; }
        
        [RadioReportId("ang_c_020232", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsDiabetesMellitus { get; set; }
        
        [RadioReportId("ang_c_020233", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsSmoking { get; set; }
        
        [RadioReportId("ang_c_020235", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public int? CigarettePacksPerDayXSmokerYears { get; set; }
        
        [RadioReportId("ang_c_020237", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsHyperlipidemia { get; set; }
        
        [RadioReportId("ang_c_020238", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsCollagenosis { get; set; }
        
        [RadioReportId("ang_c_020239", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsBicuspidAorticValve { get; set; }
        
        [RadioReportId("ang_c_020240", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsCirrhosisOfTheLiver { get; set; }
        
        [RadioReportId("ang_c_020241", InstanceName = nameof(IndicationFindingType.RiskFactors))]
        public bool IsCocaineAbuse { get; set; }
        
        #endregion
    }
}
