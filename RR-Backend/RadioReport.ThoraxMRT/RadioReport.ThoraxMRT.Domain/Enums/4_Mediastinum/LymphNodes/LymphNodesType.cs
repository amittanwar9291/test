using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum LymphNodesType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040206", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		MultiplePathologicallyEnlargedLymphNodes = 1,

		[RadioReportId("tho_m_040207", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
        LocalizationAccToIASCL = 2
    }
}
