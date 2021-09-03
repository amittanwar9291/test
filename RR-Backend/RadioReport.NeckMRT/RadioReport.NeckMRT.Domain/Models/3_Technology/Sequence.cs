using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Technology;
using RadioReport.NeckMRT.Domain.Enums.Technology;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class Sequence : SequenceBase
    {
        [RadioReportId("uni_x_030308")]
        public SequenceType SequenceType { get; set; }
        
        [RadioReportId("uni_x_0303104")]
        public bool IsChemicalShiftImaging { get; set; }
        
        [RadioReportId("nec_m_030402")]
        public bool IsBreathHoldingTechnique { get; set; }
        
        [RadioReportId("nec_m_030403")]
        public bool IsSedation { get; set; }
        
        [RadioReportId("uni_y_030401")]
        public bool IsPostContrast { get; set; }
        
        [RadioReportId("uni_x_030419")]
        public bool IsPostContrastSubtraction { get; set; }
        
        [RadioReportId("uni_x_030432")]
        public bool IsPostContrastPerfusion { get; set; }
        
        public override string InstanceName => WeightingType.ToString();
    }
}
