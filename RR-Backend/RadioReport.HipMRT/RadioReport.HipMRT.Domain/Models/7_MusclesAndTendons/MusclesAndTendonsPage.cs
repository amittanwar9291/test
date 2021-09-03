using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Domain.Constants;
using RadioReport.HipMRT.Domain.Enums;


namespace RadioReport.HipMRT.Domain.Models
{
    [GeneratedControllerPageModel("HipMRT/MusclesAndTendons")]
	public class MusclesAndTendonsPage : PageModelBase<MusclesAndTendonsPage>
	{
        [RadioReportId("hip_m_070104", InstanceName = InstanceNames.MusclesAndTendons, IsExportable = false)]
        public AreFindings AreFindings { get; set; }
		public IEnumerable<MusclesAndTendonsFinding> Findings { get; set; }
		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.HipMrtMusclesAndTendons;
	}
}
