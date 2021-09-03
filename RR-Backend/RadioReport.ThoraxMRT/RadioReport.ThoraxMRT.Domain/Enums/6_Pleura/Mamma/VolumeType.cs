using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum VolumeType : byte
	{
		None = 0,

		[RadioReportId("tho_m_060287", InstanceName = nameof(PleuraFindingType.Mamma))]
		Anisomasty = 1,

		[RadioReportId("tho_m_060291", InstanceName = nameof(PleuraFindingType.Mamma))]
		Ablatio = 2,

		[RadioReportId("tho_m_060295", InstanceName = nameof(PleuraFindingType.Mamma))]
        BreastAugmentation = 3
	}
}
