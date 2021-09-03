using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.Bladder;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class BladderFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_090106")]
        public BladderFindingType FindingType { get; set; }

        #region Common

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("pel_m_0904109-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("pel_m_0904123", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        [RadioReportId("pel_m_0902230", InstanceName = nameof(BladderFindingType.Muscles))]
        public SignalType T1wSignal { get; set; }

        [RadioReportId("pel_m_0904125", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        [RadioReportId("pel_m_0902232", InstanceName = nameof(BladderFindingType.Muscles))]
        public SignalType T2wSignal { get; set; }

        #endregion

        #region SoftTissueMass

        [RadioReportId("pel_m_0902174", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public BladderDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("pel_m_090523", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsCapsuleMembrane { get; set; }

        [RadioReportId("pel_m_090524", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("pel_m_0902176", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsInflammatoryReaction { get; set; }

        #endregion
    }
}