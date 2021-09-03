using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum DorsalType : byte
	{
		None = 0,

		[RadioReportId("han_m_050233", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfExtrinsicLigaments))]
        LigRadiotriquetrumDorsale = 1,

        [RadioReportId("han_m_050234", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfExtrinsicLigaments))]
        LigIntercarpaleDorsale = 2

    }
}
