using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum TendonsPathologyType : byte
	{
		None = 0,

        [RadioReportId("pel_m_090396", InstanceName = nameof(BladderFindingType.Tendons))]
        Rupture = 1,

        [RadioReportId("pel_m_090397", InstanceName = nameof(BladderFindingType.Tendons))]
        Tendinopathy = 2
	}
}
