using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class SpleenFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_050106")]
        public SpleenFindingType FindingType { get; set; }

        [RadioReportId("abd_m_050218", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis { get; set; }

        public DelimitationType DelimitationType { get; set; }

        [RadioReportId("abd_m_050401-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("abd_m_050233")]
        public SignalType T1w { get; set; }

        [RadioReportId("abd_m_050235")]
        public SignalType T2w { get; set; }


        [RadioReportId("abd_m_050315-l", InstanceName = nameof(InstanceNames.Spleen), IsExportable = false)]
        public CMEnhancementQuantitativeType CMEnhancementQuantitativeType { get; set; }

        [RadioReportId("abd_m_050315-l", InstanceName = nameof(CMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType CMEnhancementHomogeneityType { get; set; }

        public CMEnhancementDistributionType CMEnhancementDistributionType { get; set; }
    }
}