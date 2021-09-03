using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum CompressionInjuryType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080340", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        A0MinorNonStructuralFracture = 1,

		[RadioReportId("tho_c_080341", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        A1SingleEndplate = 2,

		[RadioReportId("tho_c_080342", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        A2CoronalSplit = 3,

		[RadioReportId("tho_c_080343", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
		A3BurstFractureIncomplete = 4,

		[RadioReportId("tho_c_080344", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
		A4BurstFractureComplete = 5
	}
}
