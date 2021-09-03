using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum DetailsCongenitalVascularRingsType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070309", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		CommonOriginOfTheBrachiocephalicTrunkAndLeftCommonCarotidArtery = 1,

		[RadioReportId("ang_c_070310", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		LeftCommonCarotidArteyCcaArisingFromBrachiocephalicTrunk = 2,

		[RadioReportId("ang_c_070311", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		LeftVertebralArteryOriginFromAorticArch = 3,

		[RadioReportId("ang_c_070312", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		AberrantRightSubclavianArteryArsaALusoria = 4,
		
		[RadioReportId("ang_c_070314", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		RightAorticArchRaaWithAberrantLeftSubclavianArtery = 5,

		[RadioReportId("ang_c_070316", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		DoubleAorticArch = 6
	}
}