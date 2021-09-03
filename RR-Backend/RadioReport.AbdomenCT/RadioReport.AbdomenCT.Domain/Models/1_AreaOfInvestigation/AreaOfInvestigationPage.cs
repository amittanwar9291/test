using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenCT.Domain.Models
{
    [GeneratedControllerPageModel("AbdomenCT/AreaOfInvestigation")]
    public class AreaOfInvestigationPage : PageModelBase<AreaOfInvestigationPage>
    {
        [RadioReportId("abd_c_010104")]
        public bool IsCTAbdomen => true;

        public PatientInformation PatientInformation { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenCtAreaOfInvestigation;
    }
}