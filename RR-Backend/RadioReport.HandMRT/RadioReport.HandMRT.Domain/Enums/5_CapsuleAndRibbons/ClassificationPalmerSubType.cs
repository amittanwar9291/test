using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum ClassificationPalmerSubType : byte
	{
		None = 0,

		[RadioReportId("han_m_050307", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIA = 1,

		[RadioReportId("han_m_050308", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIB = 2,

		[RadioReportId("han_m_050309", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIC = 3,

		[RadioReportId("han_m_050310", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeID = 4,

		[RadioReportId("han_m_050302", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIIA = 5,

		[RadioReportId("han_m_050303", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIIB = 6,

		[RadioReportId("han_m_050304", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIIC = 7,

		[RadioReportId("han_m_050305", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIID = 8,

		[RadioReportId("han_m_050306", InstanceName = nameof(CapsuleAndRibbonsFindingType.TFCCLesion))]
		TypeIIE = 9

	}
}
