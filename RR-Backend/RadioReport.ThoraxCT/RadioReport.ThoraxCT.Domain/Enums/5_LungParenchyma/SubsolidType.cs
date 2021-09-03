using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SubsolidType : byte
	{
		None = 0,

		[RadioReportId("tho_c_050504", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504304", InstanceName = nameof(LungParenchymaFindingType.Mass))]
		PartiallySolid = 1,

		[RadioReportId("tho_c_050505", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504305", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        GroundGlassLesion = 2
	}
}
