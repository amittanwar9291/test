using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SoftPartsSiteType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070203", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralEffusion))]
		[RadioReportId("tho_c_070211", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070241", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_070259", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.Pneumothorax))]
		[RadioReportId("tho_c_070273", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070295", InstanceName = nameof(SoftPartsFinding.LossOfVolumeSiteType), CustomConditionName = nameof(SoftPartsFindingType.Mamma))]
        [RadioReportId("tho_c_070381", InstanceName = nameof(SoftPartsFinding.BlurredSiteType), CustomConditionName = nameof(SoftPartsFindingType.Mamma))]
        [RadioReportId("tho_c_0703129", InstanceName = nameof(SoftPartsFinding.MediastinalshiftType), CustomConditionName = nameof(SoftPartsFindingType.Pneumothorax))]
		Right = 1,

		[RadioReportId("tho_c_070204", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralEffusion))]
		[RadioReportId("tho_c_070212", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070242", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralThickening))]
        [RadioReportId("tho_c_070260", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.Pneumothorax))]
		[RadioReportId("tho_c_070274", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_c_070296", InstanceName = nameof(SoftPartsFinding.LossOfVolumeSiteType), CustomConditionName = nameof(SoftPartsFindingType.Mamma))]
        [RadioReportId("tho_c_070382", InstanceName = nameof(SoftPartsFinding.BlurredSiteType), CustomConditionName = nameof(SoftPartsFindingType.Mamma))]
        [RadioReportId("tho_c_0703130", InstanceName = nameof(SoftPartsFinding.MediastinalshiftType), CustomConditionName = nameof(SoftPartsFindingType.Pneumothorax))]
		Left = 2,

		[RadioReportId("tho_c_070275", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Median = 3,

		[RadioReportId("tho_c_0702130", InstanceName = nameof(SoftPartsFinding.SiteType), CustomConditionName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Bilateral = 4
	}
}
