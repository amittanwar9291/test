using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.NeckMRT.Domain.Models
{
    [GeneratedControllerPageModel("NeckMRT/Examination")]
    public class ExaminationPage : PageModelBase<ExaminationPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.NeckMrtExamination;

        [RadioReportId("nec_m_010104")]
        public bool IsMRINeck { get; set; }
        public PatientInformation PatientInformation { get; set; }
    }
}
