using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ProcessType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080314", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenA1CoracoidProcess = 1,

		[RadioReportId("tho_c_080315", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenA2Acromion = 2,

		[RadioReportId("tho_c_080316", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenA3Spine = 3
    }
}
