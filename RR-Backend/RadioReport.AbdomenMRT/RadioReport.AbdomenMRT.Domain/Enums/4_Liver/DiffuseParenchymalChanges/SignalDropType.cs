using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum SignalDropType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040342", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
		Focal = 1,

		[RadioReportId("abd_m_040343", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
		Diffuse = 2
	}
}