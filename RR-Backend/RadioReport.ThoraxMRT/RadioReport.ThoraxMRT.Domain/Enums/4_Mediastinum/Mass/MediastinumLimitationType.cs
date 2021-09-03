using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum MediastinumLimitationType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040462", InstanceName = nameof(MediastinumFindingType.Mass))]
        WellDefined = 1,

		[RadioReportId("tho_m_040463", InstanceName = nameof(MediastinumFindingType.Mass))]
        IllDefined = 2
    }
}
