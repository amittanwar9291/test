using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum ContrastEnhancementType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040546", InstanceName = nameof(MediastinumFindingType.Mass))]
        No = 1,

		[RadioReportId("tho_m_040547", InstanceName = nameof(MediastinumFindingType.Mass))]
        Low = 2,

		[RadioReportId("tho_m_040548",  InstanceName = nameof(MediastinumFindingType.Mass))]
        Strong = 3
    }
}
