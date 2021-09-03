using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
	public enum MorphologyTendinopathyType : byte
	{
		None = 0,

        [RadioReportId("pel_m_0904136", InstanceName = nameof(BladderFindingType.Tendons))]
		Thinning = 1,

        [RadioReportId("pel_m_0904137", InstanceName = nameof(BladderFindingType.Tendons))]
		Thickening = 2
	}
}
