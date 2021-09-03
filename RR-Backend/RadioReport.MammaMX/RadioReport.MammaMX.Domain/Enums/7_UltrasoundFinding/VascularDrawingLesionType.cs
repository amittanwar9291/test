using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum VascularDrawingLesionType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070323", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Missing = 1,

		[RadioReportId("mam_mx_070324", InstanceName = nameof(UltrasoundFindingType.Mass))]
		VesselsInsideTheLesion = 2,

		[RadioReportId("mam_mx_070325", InstanceName = nameof(UltrasoundFindingType.Mass))]
		PeripheralVessels = 3

	}
}
