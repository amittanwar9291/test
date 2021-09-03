using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SternumFractureType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0803217", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
		Manubrium = 1,

		[RadioReportId("tho_c_0803222", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        Body = 2,

		[RadioReportId("tho_c_0804209", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
		XiphoidProcess = 3,

		[RadioReportId("tho_c_0805230", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        SternalFractureNotFurtherDefined = 4
    }
}
