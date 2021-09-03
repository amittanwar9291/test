using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum LesionOfExtrinsicLigamentsType : byte
	{
		None = 0,

		[RadioReportId("han_m_050224", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        Rupture = 1,

        [RadioReportId("han_m_050225", InstanceName = nameof(CapsuleAndRibbonsFindingType.RuptureOfTheLigScapholunatum))]
        Insufficiency = 2,

    }
}
