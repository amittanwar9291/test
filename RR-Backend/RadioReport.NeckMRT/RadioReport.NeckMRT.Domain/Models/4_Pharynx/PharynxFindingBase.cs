using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class PharynxFindingBase: FindingBase
    {
        [RadioReportId("nec_m_040106")]
        public PharynxFindingType FindingType { get; set; }

        public override string InstanceName => FindingType.ToString();

        #region Common
        public CmEnhancementQuantitativeType CmEnhancementQuantitativeType { get; set; }

        public HomogeneityType HomogeneityType { get; set; }
        #endregion

        #region Mass
        #region FirstTab
        [RadioReportId("nec_m_040209", InstanceName = nameof(PharynxFindingType.Mass), AlternativeTranslationSuffix="v2")]
        public DifferentialDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("nec_m_040326", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsNasopharynx { get; set; }

        [RadioReportId("nec_m_040408", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOropharynx { get; set; }

        [RadioReportId("nec_m_040502", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsHypopharynx { get; set; }
        #endregion

        #region SecondTab
        public MarginType MarginType { get; set; }

        [RadioReportId("nec_m_040510-l", InstanceName = nameof(PharynxFinding.MassHomogeneityType), IsExportable = false)]
        public HomogeneityType MassHomogeneityType { get; set; }
        #endregion

        #region ThirdTab
        [RadioReportId("nec_m_040229", InstanceName = nameof(PharynxFindingType.Mass))]
        public SignalTypeExtended SignalT1wType { get; set; }
        
        [RadioReportId("nec_m_040232", InstanceName = nameof(PharynxFindingType.Mass))]
        public SignalTypeExtended SignalT2wType { get; set; }

        [RadioReportId("nec_m_040355", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("nec_m_040435", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsDisplacing { get; set; }

        [RadioReportId("nec_m_040436", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsInvasive { get; set; }
        #endregion

        #endregion
    }
}
