using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ShiftType : byte
	{
		None = 0,

		[RadioReportId("tho_c_040302", InstanceName = nameof(MediastinumFinding.DirectionType))]
        [RadioReportId("tho_c_040402", InstanceName = nameof(MediastinumFinding.TopMediastinalNodesType))]
        [RadioReportId("tho_c_040423", InstanceName = nameof(MediastinumFinding.LymphNodesLocalizationType))]
		[RadioReportId("tho_c_040384", InstanceName = nameof(MediastinumFinding.TracheaShiftType))]
		Right = 1,

        [RadioReportId("tho_c_040303", InstanceName = nameof(MediastinumFinding.DirectionType))]
        [RadioReportId("tho_c_040403", InstanceName = nameof(MediastinumFinding.TopMediastinalNodesType))]
        [RadioReportId("tho_c_040424", InstanceName = nameof(MediastinumFinding.LymphNodesLocalizationType))]
		[RadioReportId("tho_c_040385", InstanceName = nameof(MediastinumFinding.TracheaShiftType))]
		Left = 2
    }
}
