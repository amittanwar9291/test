using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.FeetMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Models
{
    [GeneratedControllerPageModel("FeetMRT/LigamentsAndTendons")]
    public class LigamentsAndTendonsPage : PageModelBase<LigamentsAndTendonsPage>
	{
		public override string PageTypeName => PageTypeNames.FeetMrtLigamentsAndTendons;

		[RadioReportId("anc_m_050103-l", InstanceName = InstanceNames.Ligaments, IsExportable = false)]
		public AreFindings AreFindings { get; set; }

		public IEnumerable<LigamentsAndTendonsFinding> Findings { get; set; }
	}
}
