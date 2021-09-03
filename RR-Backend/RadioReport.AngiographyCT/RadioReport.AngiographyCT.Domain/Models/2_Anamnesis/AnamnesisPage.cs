using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AngiographyCT.Domain.Models
{
    [GeneratedControllerPageModel("AngiographyCT/Anamnesis")]
    public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
        public IEnumerable<IndicationFinding> IndicationFindings { get; set; }

        public IEnumerable<PriorInterventionsFinding> PriorInterventionsFindings { get; set; }
        
        #region Prior exams
        
        [RadioReportId("ang_c_020113")]
        public bool IsMR { get; set; }
        
        [RadioReportId("ang_c_020114")]
        public bool IsMRAngiography { get; set; }
        
        [RadioReportId("ang_c_020116")]
        public int? MRAngiographyMonth { get; set; }
        
        [RadioReportId("ang_c_020117")]
        public int? MRAngiographyYear { get; set; }
        
        [RadioReportId("ang_c_020280")]
        public bool IsCT { get; set; }
        
        [RadioReportId("ang_c_020281")]
        public bool IsCTAngiography { get; set; }
        
        [RadioReportId("ang_c_020283")]
        public int? CTAngiographyMonth { get; set; }
        
        [RadioReportId("ang_c_020284")]
        public int? CTAngiographyYear { get; set; }
        
        [RadioReportId("ang_c_020343")]
        public bool IsDigitalSubtractionAngiography { get; set; }
        
        [RadioReportId("ang_c_020345")]
        public int? DigitalSubtractionAngiographyMonth { get; set; }
        
        [RadioReportId("ang_c_020346")]
        public int? DigitalSubtractionAngiographyYear { get; set; }
        
        [RadioReportId("ang_c_020434")]
        public bool IsUS { get; set; }
        
        [RadioReportId("ang_c_020435")]
        public bool IsUSDopplerUltrasound { get; set; }
        
        [RadioReportId("ang_c_020437")]
        public int? DopplerUltrasoundMonth { get; set; }
        
        [RadioReportId("ang_c_020438")]
        public int? DopplerUltrasoundYear { get; set; }
        
        #endregion
        
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AngiographyCtAnamnesis;
    }
}
