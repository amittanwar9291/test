using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        public override string InstanceName => WeightingType.ToString();

        [RadioReportId("uni_x_030308")]
        public SequenceType SequenceType { get; set; }

        [RadioReportId("uni_x_0303101")]
        public bool IsECGTriggering { get; set; }

        [RadioReportId("tho_m_030301")]
        public bool IsRespiratoryTriggering { get; set; }

        [RadioReportId("uni_y_030401")]
        public bool IsPostContrast { get; set; }

        [RadioReportId("uni_x_030424")]
        public bool IsB0 { get; set; }

        [RadioReportId("uni_x_030425")]
        public bool IsB50 { get; set; }

        [RadioReportId("uni_x_030426")]
        public bool IsB100 { get; set; }

        [RadioReportId("uni_x_030427")]
        public bool IsB800 { get; set; }

        [RadioReportId("uni_x_030428")]
        public bool IsB1000 { get; set; }

        [RadioReportId("uni_x_030429")]
        public bool IsB1400 { get; set; }

        [RadioReportId("uni_x_030430")]
        public bool IsCalculated { get; set; }

        [RadioReportId("uni_x_030431")]
        public bool IsADCMap { get; set; }
    }
}
