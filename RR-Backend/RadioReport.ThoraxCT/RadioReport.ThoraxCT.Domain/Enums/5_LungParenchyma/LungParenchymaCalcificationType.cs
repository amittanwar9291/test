using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LungParenchymaCalcificationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_050223", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505307", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Diffuse = 1,

		[RadioReportId("tho_c_050224", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505308", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Centrally = 2,

		[RadioReportId("tho_c_050225", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505309", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Popcornstyle = 3,

		[RadioReportId("tho_c_050226", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505310", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Concentric = 4,

		[RadioReportId("tho_c_050227", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505311", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        Microcalcification = 5,

		[RadioReportId("tho_c_050228", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505312", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Eccentric = 6
	}
}
