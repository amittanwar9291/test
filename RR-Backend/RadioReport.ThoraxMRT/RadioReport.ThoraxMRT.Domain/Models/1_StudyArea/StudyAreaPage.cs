using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxMRT/StudyArea")]
    public class StudyAreaPage : PageModelBase<StudyAreaPage>
    {
        [RadioReportId("tho_m_010104")]
        public bool IsDedicatedMRTThorax => true;

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxMrtStudyArea;
    }
}
