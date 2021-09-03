using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.Common.Logic.Attributes;
using RadioReport.AngiographyMRT.Domain.Enums.Technology;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        public override string InstanceName => MethodType.ToString();

        [RadioReportId("ang_m_030202")]
        public MethodType MethodType { get; set; }

        [RadioReportId("ang_m_030303")]
        public NonContrastEnhancedMRAngiographyType NonContrastEnhancedMRAngiographyType { get; set; }

        [RadioReportId("ang_m_030305")]
        public ContrastEnhancedMRAngiographyType ContrastEnhancedMRAngiographyType { get; set; }

        [RadioReportId("uni_x_0303101")]
        public bool IsECGTriggering { get; set; }

        [RadioReportId("ang_m_030403")]
        public bool IsMIP { get; set; }

        [RadioReportId("ang_m_030404")]
        public bool IsMPR { get; set; }

        [RadioReportId("ang_m_030405")]
        public bool IsVRT { get; set; }
    }
}