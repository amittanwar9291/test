using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum NotFurtherDefinedClassificationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0804205", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        [RadioReportId("tho_c_080411", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FractureOlderRemodeled = 1,

		[RadioReportId("tho_c_0804232", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        [RadioReportId("tho_c_0804233", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        Suspected = 2
	}
}
