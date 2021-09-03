using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum ClassificationPalmerType : byte
	{
		None = 0,

        [RadioReportId("han_m_050211", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
        Traumatic = 1,

        [RadioReportId("han_m_050238", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
        Degenerative = 2

    }
}
