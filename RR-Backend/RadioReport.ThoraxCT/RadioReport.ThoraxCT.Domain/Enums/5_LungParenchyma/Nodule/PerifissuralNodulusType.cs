using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum PerifissuralNodulusType : byte
	{
		None = 0,

		[RadioReportId("tho_c_050309", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
		TypicalPFN = 1,

		[RadioReportId("tho_c_050310", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
		AtypicalPFN = 2
	}
}
