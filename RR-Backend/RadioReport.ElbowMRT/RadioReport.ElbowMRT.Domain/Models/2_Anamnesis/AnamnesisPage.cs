using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.ElbowMRT.Domain.Models
{
    [GeneratedControllerPageModel("ElbowMRT/Anamnesis")]
	public class AnamnesisPage : PageModelBase<AnamnesisPage>
    {
		public IEnumerable<AnamnesisFinding> Findings { get; set; }

		[RadioReportId("elb_m_0203102")]
		public bool IsXRay { get; set; }

		[RadioReportId("elb_m_0203103")]
		public byte? XRayMonth { get; set; }

		[RadioReportId("elb_m_0203104")]
		public int? XRayYear { get; set; }

		[RadioReportId("elb_m_0203105")]
		public bool IsCT { get; set; }

		[RadioReportId("elb_m_0203106")]
		public byte? CTMonth { get; set; }

		[RadioReportId("elb_m_0203107")]
		public int? CTYear { get; set; }

		[RadioReportId("elb_m_0203108")]
		public bool IsMRI { get; set; }

		[RadioReportId("elb_m_0203109")]
		public byte? MRIMonth { get; set; }

		[RadioReportId("elb_m_0203110")]
		public int? MRIYear { get; set; }

		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.ElbowMrtAnamnesis;
	}
}
