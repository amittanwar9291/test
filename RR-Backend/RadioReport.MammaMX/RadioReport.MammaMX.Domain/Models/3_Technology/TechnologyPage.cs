using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMX.Domain.Enums;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Domain.Models
{
    [GeneratedControllerPageModel("MammaMX/Technology")]
	public class TechnologyPage : PageModelBase<TechnologyPage>
	{
		[RadioReportId("mam_mx_030105")]
		public bool IsMammography { get; set; }

		[RadioReportId("mam_mx_030108")]
		public BreastLocations BreastLocationCC { get; set; }

		[RadioReportId("mam_mx_030111")]
		public BreastLocations BreastLocationMLO { get; set; }

		public IEnumerable<TechnologyFinding> Findings { get; set; }

		[RadioReportId("mam_mx_030401")]
		public bool IsUltrasound { get; set; }

		[RadioReportId("mam_mx_030403")]
		public BreastLocations BreastLocationSonography { get; set; }

		[RadioReportId("mam_mx_030404")]
		public bool IsColorCodedDopplerUltrasound { get; set; }

		[RadioReportId("mam_mx_030405")]
		public bool IsElastography { get; set; }

		[RadioReportId("mam_mx_030406")]
		public bool IsUltrasoundGuidedBreastBiopsy { get; set; }

		[RadioReportId("mam_mx_030407")]
		public bool IsPunchBiopsyRight { get; set; }

		[RadioReportId("mam_mx_030408")]
		public bool IsPunchBiopsyLeft { get; set; }

		[RadioReportId("mam_mx_030502")]
		public bool IsVeryDenseParenchyma { get; set; }

		[RadioReportId("mam_mx_030503")]
		public bool IsParenchymaNotCompletelyVisible { get; set; }

		[RadioReportId("mam_mx_030504")]
		public bool IsProjectionError { get; set; }

		[RadioReportId("mam_mx_030505")]
		public bool IsArtifact { get; set; }

		[RadioReportId("mam_mx_030506")]
		public bool IsOther { get; set; }

		public override string PageTypeName => PageTypeNames.MammaMxTechnology;
	}
}
