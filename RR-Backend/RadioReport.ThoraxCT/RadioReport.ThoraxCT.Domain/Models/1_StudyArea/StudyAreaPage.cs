using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.ThoraxCT.Domain.Models
{
    [GeneratedControllerPageModel("ThoraxCT/StudyArea")]
    public class StudyAreaPage : PageModelBase<StudyAreaPage>
    {
        [RadioReportId("tho_c_010104")]
        public bool IsDedicatedChestCT => true;

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ThoraxCtStudyArea;
    }
}
