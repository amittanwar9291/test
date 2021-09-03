using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum PosteriorSegmentType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080324", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		OneAExtraarticular = 1,

		[RadioReportId("tho_c_080325", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        OneBPartialCosttransverseDisruption = 2,

		[RadioReportId("tho_c_080326", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        OneCCompleteCostotransverseDisruption = 3
    }
}
