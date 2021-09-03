using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum BursitisLocalizationType : byte
    {
		None = 0,

		[RadioReportId("pel_m_100214", InstanceName = nameof(BonesFindingType.Bursitis))]
        TrochantericBursa = 1,

		[RadioReportId("pel_m_100215", InstanceName = nameof(BonesFindingType.Bursitis))]
        IliopsoasBursa = 2,

		[RadioReportId("pel_m_100216", InstanceName = nameof(BonesFindingType.Bursitis))]
        IschialBursa = 3,

		[RadioReportId("pel_m_100217", InstanceName = nameof(BonesFindingType.Bursitis))]
        ObturatorExternusBursa = 4,

		[RadioReportId("pel_m_100218", InstanceName = nameof(BonesFindingType.Bursitis))]
		BursaQuadratusFemoris = 5,

		[RadioReportId("pel_m_100219", InstanceName = nameof(BonesFindingType.Bursitis))]
        SubglutealBursae = 6
	}
}
