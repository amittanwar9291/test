using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum RibFractureType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080323", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		Sixteen1PosteriorSegment = 1,

		[RadioReportId("tho_c_080412", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		Sixteen2Shank = 2,

		[RadioReportId("tho_c_080416", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        Sixteen3AnteriorEndSegment = 3,

		[RadioReportId("tho_c_0805236", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        NotFurtherDefined = 4
    }
}
