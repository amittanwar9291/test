using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("AbdomenMRT/Liver")]
    public class LiverPage : PageModelBase<LiverPage>
    {
        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.AbdomenMrtLiver;

        public LiverAreFindings AreFindings { get; set; }

		[RadioReportId("abd_m_040118")]
		public bool IsNoEvidenceOfStoneDisease { get; set; }
        
        public IEnumerable<LiverFinding> Findings { get; set; }
    }
}
