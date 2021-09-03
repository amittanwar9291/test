using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LungParenchymaDensityType : byte
	{
		None = 0,

		[RadioReportId("tho_c_050502", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504302", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Solid = 1,

		[RadioReportId("tho_c_050503", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504303", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		Subsolid = 2,

		[RadioReportId("tho_c_050506", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504306", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		AverageDensity = 3
    }
}
