using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum NodularSurfaceType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040242", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
		Micronodular = 1,

		[RadioReportId("abd_m_040243", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
		Macronodular = 2
	}
}