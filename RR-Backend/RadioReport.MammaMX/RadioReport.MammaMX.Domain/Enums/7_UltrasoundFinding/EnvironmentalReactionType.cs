using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum EnvironmentalReactionType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070327", InstanceName = nameof(UltrasoundFindingType.Mass))]
		ArchitecturalDistorsion = 1,

		[RadioReportId("mam_mx_070328", InstanceName = nameof(UltrasoundFindingType.Mass))]
		DuctalChanges = 2,

		[RadioReportId("mam_mx_070329", InstanceName = nameof(UltrasoundFindingType.Mass))]
		LocoregionalEdema = 3,

		[RadioReportId("mam_mx_070330", InstanceName = nameof(UltrasoundFindingType.Mass))]
		ThrombosedVein = 4
	}
}
