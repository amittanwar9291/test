using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.HeadCT.Domain.Models
{
    [GeneratedControllerPageModel("HeadCT/Summary")]
    public class SummaryPage : PageModelBase<SummaryPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HeadCtSummary;
    }
}
