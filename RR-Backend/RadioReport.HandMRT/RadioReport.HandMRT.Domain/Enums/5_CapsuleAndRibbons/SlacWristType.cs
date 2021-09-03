using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum SlacWristType : byte
	{
		None = 0,

		[RadioReportId("han_m_050227", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        StageI = 1,

        [RadioReportId("han_m_050228", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        StageII = 2,

        [RadioReportId("han_m_050229", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        StageIII = 3,


	}
}
