using System;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    [Flags]
	public enum TransitionaZoneTZLocalizerTypes : int
	{
		None = 0,
		TZBaseRightAnterior = 1 << 0,
		TZBaseRightPosterior = 1 << 1,
		TZBaseLeftAnterior = 1 << 2,
		TZBaseLeftPosterior = 1 << 3,
		TZMiddleGlandRightAnterior = 1 << 4,
		TZMiddleGlandRightPosterior = 1 << 5,
		TZMiddleGlandLeftAnterior = 1 << 6,
		TZMiddleGlandLeftPosterior = 1 << 7,
		TZApexRightAnterior = 1 << 8,
		TZApexRightPosterior = 1 << 9,
		TZApexLeftAnterior = 1 << 10,
		TZApexLeftPosterior = 1 << 11

	}
}
