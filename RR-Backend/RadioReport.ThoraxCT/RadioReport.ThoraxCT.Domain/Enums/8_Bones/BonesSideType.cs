using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum BonesSideType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080203", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        [RadioReportId("tho_c_080203", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        [RadioReportId("tho_c_080203", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080203", InstanceName = nameof(BonesFindingType.MassScapula))]
        Right = 1,

		[RadioReportId("tho_c_080204", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        [RadioReportId("tho_c_080204", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        [RadioReportId("tho_c_080204", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_080204", InstanceName = nameof(BonesFindingType.MassScapula))]
        Left = 2
	}
}
