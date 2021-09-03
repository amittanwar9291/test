using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.FeetMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Models
{
    [GeneratedControllerPageModel("FeetMRT/SoftTissue")]
    public class SoftTissuePage : PageModelBase<SoftTissuePage>
	{
		public override string PageTypeName => PageTypeNames.FeetMrtSoftTissue;

        [RadioReportId("anc_m_060103-l", InstanceName = InstanceNames.SoftTissue, IsExportable = false)]
		public AreFindings AreFindings { get; set; }

		public IEnumerable<SoftTissueFinding> Findings { get; set; }
	}
}
