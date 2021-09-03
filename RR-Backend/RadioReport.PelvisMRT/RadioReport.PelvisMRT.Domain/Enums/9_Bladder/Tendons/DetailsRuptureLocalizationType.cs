using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
	public enum DetailsRuptureLocalizationType : byte
	{
		None = 0,

        [RadioReportId("pel_m_0904100", InstanceName = nameof(BladderFindingType.Tendons))]
		Proximal = 1,

        [RadioReportId("pel_m_0904101", InstanceName = nameof(BladderFindingType.Tendons))]
		Distal = 2
	}
}
