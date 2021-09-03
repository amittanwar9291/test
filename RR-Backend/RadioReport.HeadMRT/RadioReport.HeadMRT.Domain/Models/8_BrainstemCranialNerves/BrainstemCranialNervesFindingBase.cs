using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BrainstemCranialNervesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_080107")]
        public BrainstemCranialNervesFindingType FindingType { get; set; }

        [RadioReportId("hea_m_080256", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        [RadioReportId("hea_m_080204", InstanceName = nameof(BrainstemCranialNervesFindingType.CranialNerves))]
        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("hea_m_080437", InstanceName = nameof(BrainstemCranialNervesFindingType.Brainstem))]
        public bool IsPons { get; set; }

        [RadioReportId("hea_m_080421")]
        public SignalTypeExtended T1WSignalType { get; set; }

        [RadioReportId("hea_m_080423")]
        public SignalTypeExtended T2WSignalType { get; set; }

        [RadioReportId("hea_m_080425")]
        public SignalTypeExtended FlairSignalType { get; set; }

        [RadioReportId("hea_m_080427")]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("hea_m_080427-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_080513")]
        public SignalType DwiSignalType { get; set; }

        [RadioReportId("hea_m_080227")]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_080518-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public ContrastQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hea_m_080521-l", InstanceName = nameof(BrainstemCranialNervesFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_m_080524-l", InstanceName = InstanceNames.BrainstemCranialNerves, IsExportable = false)]
        public ContrastDistributionType ContrastEnhancementDistributionType { get; set; }
    }
}
