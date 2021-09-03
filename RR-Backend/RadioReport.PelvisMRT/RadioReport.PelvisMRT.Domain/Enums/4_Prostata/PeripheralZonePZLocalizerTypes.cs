using System;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    [Flags]
	public enum PeripheralZonePZLocalizerTypes : int
	{
		None = 0,
		PZBaseRightAnterior = 1 << 0,
		PZBaseRightPosteriorLateral = 1 << 1,
		PZBaseRightPosteriorMedial = 1 << 2,
		PZBaseLeftAnterior = 1 << 3,
		PZBaseLeftPosteriorLateral = 1 << 4,
		PZBaseLeftPosteriorMedial = 1 << 5,
		PZMiddleGlandRightAnterior = 1 << 6,
		PZMiddleGlandRightPosteriorLateral = 1 << 7,
		PZMiddleGlandRightPosteriorMedial = 1 << 8,
		PZMiddleGlandLeftAnterior = 1 << 9,
		PZMiddleGlandLeftPosteriorLateral = 1 << 10,
		PZMiddleGlandLeftPosteriorMedial = 1 << 11,
		PZApexRightAnterior = 1 << 12,
		PZApexRightPosteriorLateral = 1 << 13,
		PZApexRightPosteriorMedial = 1 << 14,
		PZApexLeftAnterior = 1 << 15,
		PZApexLeftPosteriorLateral = 1 << 16,
		PZApexLeftPosteriorMedial = 1 << 17


	}
}
