using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum ShiftType : byte
	{
		None = 0,

		[RadioReportId("tho_m_040302", InstanceName = nameof(MediastinumFinding.DirectionType))]
        [RadioReportId("tho_m_040402", InstanceName = nameof(MediastinumFinding.SupraclavicularLowCervicalAndJugular))]
        [RadioReportId("tho_m_040422", InstanceName = nameof(MediastinumFinding.LymphNodesLocalizationType))]
		[RadioReportId("tho_m_040384", InstanceName = nameof(MediastinumFinding.TracheaShiftType))]
		Right = 1,

        [RadioReportId("tho_m_040303", InstanceName = nameof(MediastinumFinding.DirectionType))]
        [RadioReportId("tho_m_040403", InstanceName = nameof(MediastinumFinding.SupraclavicularLowCervicalAndJugular))]
        [RadioReportId("tho_m_040423", InstanceName = nameof(MediastinumFinding.LymphNodesLocalizationType))]
		[RadioReportId("tho_m_040385", InstanceName = nameof(MediastinumFinding.TracheaShiftType))]
		Left = 2
    }
}
