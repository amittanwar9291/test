using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.CardioMRT.Domain.Enums;
using System.Collections.Generic;
using RadioReport.Common.Logic.Attributes;
using RadioReport.CardioMRT.Domain.Constants;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("CardioMRT/SpatialRequirement")]
	public class SpatialRequirementPage : PageModelBase<SpatialRequirementPage>
	{
		[RadioReportId("car_m_080104l", InstanceName = InstanceNames.SpatialRequirement, IsExportable = false)]
		public AreFindings AreFindings { get; set; }
		public IEnumerable<SpatialRequirementFinding> Findings { get; set; }

		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtSpatialRequirement;
    }
}
