using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.CardioMRT.Domain.Enums.RightVentricle;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageModel("CardioMRT/RightVentricle")]
	public class RightVentriclePage : PageModelBase<RightVentriclePage>
	{
		public FindingType FindingType { get; set; }

		[RadioReportId("car_m_070203")]
		public bool IsMyocardialEdema { get; set; }

		[RadioReportId("car_m_070203l", InstanceName = nameof(MyocardialEdemaType), IsExportable = false)]
		public RightVentricleType MyocardialEdemaType { get; set; }

		[RadioReportId("car_m_070206")]
		public bool IsWallThickening { get; set; }

		[RadioReportId("car_m_070206l", InstanceName = nameof(WallThickeningType), IsExportable = false)]
		public RightVentricleType WallThickeningType { get; set; }

		[RadioReportId("car_m_070209")]
		public bool IsWallThinning { get; set; }

		[RadioReportId("car_m_070209l", InstanceName = nameof(WallThinningType), IsExportable = false)]
		public RightVentricleType WallThinningType { get; set; }

		[RadioReportId("car_m_070212")]
		public bool IsMicroAneurysm { get; set; }

		[RadioReportId("car_m_070213")]
		public bool IsOverOneLesion { get; set; }

		[RadioReportId("car_m_070214")]
		public bool IsFatSignalInMyocardium { get; set; }

		public FunctionType FunctionType { get; set; }

		[RadioReportId("car_m_070401l", InstanceName = nameof(LGEType), IsExportable = false)]
		public RightVentricleType LGEType { get; set; }

		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtRightVentricle;
	}
}
