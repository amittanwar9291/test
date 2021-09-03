using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum PalmarType : byte
	{
		None = 0,

        [RadioReportId("han_m_050236", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfExtrinsicLigaments))]
        LigRadioscaphocapitatum = 1,

        [RadioReportId("han_m_050237", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfExtrinsicLigaments))]
        LigRadiolunotriquetrum = 2
        
    }
}
