using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum SideAsymmetryType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040244", InstanceName = nameof(ProstataFindingType.CentralZoneCZ))]
		RightSideProminent = 1,

		[RadioReportId("pel_m_040245", InstanceName = nameof(ProstataFindingType.CentralZoneCZ))]
		LeftSideProminent = 2

	}
}
