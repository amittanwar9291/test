using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("hip_m_060203", InstanceName = nameof(CapsuleAndLigamentsFindingType.LigamentousLesion))]
		[RadioReportId("hip_m_060216", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
		Right = 1,

		[RadioReportId("hip_m_060204", InstanceName = nameof(CapsuleAndLigamentsFindingType.LigamentousLesion))]
		[RadioReportId("hip_m_060217", InstanceName = nameof(CapsuleAndLigamentsFindingType.SynoviaMass))]
		Left = 2

	}
}
