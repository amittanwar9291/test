using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LymphNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040207", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		MultiplePathologicallyEnlargedLymphNodes = 1,

		[RadioReportId("tho_c_040208", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        LocalizationAccToIASCL = 2
    }
}
