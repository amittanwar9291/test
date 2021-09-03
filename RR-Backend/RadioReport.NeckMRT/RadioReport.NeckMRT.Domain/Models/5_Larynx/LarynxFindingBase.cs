using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.NeckMRT.Domain.Enums.Larynx;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class LarynxFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("nec_m_050106")]
        public LarynxFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("nec_m_050204", InstanceName = nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_050530", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public DifferentialDiagnosisType DifferentialDiagnosis { get; set; }
        
        #endregion

        #region Mass
        [RadioReportId("nec_m_050309", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsGlottis { get; set; }

        [RadioReportId("nec_m_050311", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsSinusOfMorgagni { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("nec_m_050210", InstanceName = nameof(LarynxFindingType.Mass))]
        public SignalType T1wSignal { get; set; }
        
        [RadioReportId("nec_m_050213", InstanceName = nameof(LarynxFindingType.Mass))]
        public SignalType T2wSignal { get; set; }

        [RadioReportId("nec_m_050410", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsInvasive { get; set; }

        public CmQuantitativeType CmQuantitativeType { get; set; }

        [RadioReportId("nec_m_050520-l", InstanceName = nameof(LarynxFinding.CmHomogeneityType), IsExportable = false)]
        public HomogeneityType CmHomogeneityType { get; set; }

        [RadioReportId("nec_m_050303", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsSupraglotticSpace { get; set; }
        #endregion


    }
}
