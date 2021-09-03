using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum AscitesType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040246", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
		Little = 1,

		[RadioReportId("abd_m_040247", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
		Significant = 2
	}
}