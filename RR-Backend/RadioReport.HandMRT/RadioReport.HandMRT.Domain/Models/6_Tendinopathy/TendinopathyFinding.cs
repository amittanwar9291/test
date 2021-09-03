using RadioReport.Common.Logic.Attributes;
using RadioReport.HandMRT.Domain.Enums.Tendinopathy;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.HandMRT.Domain.Models
{
	public class TendinopathyFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("han_m_060106")]
        public TendinopathyFindingType FindingType { get; set; }

        #region Common

        public PathologyType PathologyType { get; set; }

        [RadioReportId("han_m_060403", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060419", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsWithTendonTear { get; set; }

        public TendovaginitisType TendovaginitisType { get; set; }

        [RadioReportId("han_m_060409", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060425", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public int? MaxSize { get; set; }

        public RuptureType RuptureType { get; set; }

        [RadioReportId("han_m_060415", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060431", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public int? Retraction { get; set; }

        [RadioReportId("han_m_060501", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060512", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsPeritendinousChanges { get; set; }

        [RadioReportId("han_m_060502", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060513", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsPeriTenosynovitis { get; set; }

        [RadioReportId("han_m_060504", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060515", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTearAtTheEnthesis { get; set; }

        [RadioReportId("han_m_060505", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060516", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsPerifocalHematoma { get; set; }

        [RadioReportId("han_m_060508", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060519", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsSuspected { get; set; }

        [RadioReportId("han_m_060507", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        [RadioReportId("han_m_060518", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }
        
        #endregion

        #region FlexorTendons

        [RadioReportId("han_m_060205", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool IsTendonsFlexorDigitorumSuperficialisMuscle { get; set; }

        [RadioReportId("han_m_060206", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool SuperficialisD2 { get; set; }

        [RadioReportId("han_m_060207", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool SuperficialisD3 { get; set; }

        [RadioReportId("han_m_060208", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool SuperficialisD4 { get; set; }
        
        [RadioReportId("han_m_060209", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool SuperficialisD5 { get; set; }

        [RadioReportId("han_m_060210", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool IsTendonsFlexorDigitorumProfundusMuscle { get; set; }

        [RadioReportId("han_m_060211", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool ProfundusD2 { get; set; }

        [RadioReportId("han_m_060212", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool ProfundusD3 { get; set; }

        [RadioReportId("han_m_060213", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool ProfundusD4 { get; set; }

        [RadioReportId("han_m_060214", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool ProfundusD5 { get; set; }

        [RadioReportId("han_m_060301", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool IsTendonFlexorPollicisLongusMuscle { get; set; }
        
        [RadioReportId("han_m_060302", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool IsTendonFlexorCarpiRadialisMuscle { get; set; }
        
        [RadioReportId("han_m_060303", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool IsTendonFlexorCarpiUlnarisMuscle { get; set; }
        
        [RadioReportId("han_m_060503", InstanceName = nameof(TendinopathyFindingType.FlexorTendons))]
        public bool IsStenosisInTheOsteofibrousCanal { get; set; }
        
        #endregion

        #region ExtensorTendons

        [RadioReportId("han_m_060216", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonAbductorPollicisLongusMuscle { get; set; }

        [RadioReportId("han_m_060217", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonExtensorPollicisBrevisMuscle { get; set; }
        
        [RadioReportId("han_m_060218", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonExtensorCarpiRadialisLongusMuscle { get; set; }
        
        [RadioReportId("han_m_060219", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonExtensorCarpiRadialisBrevisMuscle { get; set; }

        [RadioReportId("han_m_060220", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonExtensorPollicisLongusMuscle { get; set; }

        [RadioReportId("han_m_060221", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonsExtensoresDigitorumAndIndicisMuscles { get; set; }

        [RadioReportId("han_m_060223", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool ExtensoresD2 { get; set; }

        [RadioReportId("han_m_060224", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool ExtensoresD3 { get; set; }

        [RadioReportId("han_m_060225", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool ExtensoresD4 { get; set; }

        [RadioReportId("han_m_060226", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool ExtensoresD5 { get; set; }

        [RadioReportId("han_m_060304", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonExtensorDigitiMinimiMuscle { get; set; }

        [RadioReportId("han_m_060305", InstanceName = nameof(TendinopathyFindingType.ExtensorTendons))]
        public bool IsTendonExtensorCarpiUlnarisMuscle { get; set; }

        public DetailsType DetailsType { get; set; }

        #endregion

        #region Ganglion

        public LocalizationType LocalizationType { get; set; }

        [RadioReportId("han_m_060231", InstanceName = nameof(TendinopathyFindingType.Ganglion), CustomConditionName = nameof(LocalizationType.FlexorTendons))]
        [RadioReportId("han_m_060233", InstanceName = nameof(TendinopathyFindingType.Ganglion), CustomConditionName = nameof(LocalizationType.ExtensorTendons))]
        public LocalizationDetailsType LocalizationDetailsType { get; set; }
        

        [RadioReportId("han_m_060308", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        public int? Size { get; set; }

        [RadioReportId("han_m_060311", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        public int? SecondPlane { get; set; }

        [RadioReportId("han_m_060314", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        public int? ThirdPlane { get; set; }

        public TendonInvolvementType TendonInvolvementType { get; set; }

        [RadioReportId("han_m_060435", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        public SignalType SignalTypeT1w { get; set; }

        [RadioReportId("han_m_060438", InstanceName = nameof(TendinopathyFindingType.Ganglion))]
        public SignalType SignalTypeT2w { get; set; }

        public InternalStructureType InternalStructureType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) {

            return customConditionId switch
            {
                nameof(LocalizationType.FlexorTendons) => LocalizationType.ToString() == customConditionId,
                nameof(LocalizationType.ExtensorTendons) => LocalizationType.ToString() == customConditionId,
                _ => false
            };
        }

    }
}
