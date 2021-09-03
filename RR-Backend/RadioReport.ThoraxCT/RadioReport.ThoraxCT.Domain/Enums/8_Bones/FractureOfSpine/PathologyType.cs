using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums.Assessment
{
	public enum PathologyType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080503", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        HeightReductionAnatomicVariation = 1,

		[RadioReportId("tho_c_080504", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
		ScheuermannsDisease = 2,

		[RadioReportId("tho_c_080505", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
		VertebralBodyRemodeling = 3,

		[RadioReportId("tho_c_0805217", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        IncompleteNotochordRegression = 4
    }
}
