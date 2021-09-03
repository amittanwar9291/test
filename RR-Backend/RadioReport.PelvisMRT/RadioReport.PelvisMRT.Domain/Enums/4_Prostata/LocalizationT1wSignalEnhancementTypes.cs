using System;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    [Flags]
	public enum LocalizationT1wSignalEnhancementTypes : ulong
	{
		None = 0,

		TZBaseRightAnterior = 1ul << 0,
		TZBaseRightPosterior = 1ul << 1,
		TZBaseLeftAnterior = 1ul << 2,
		TZBaseLeftPosterior = 1ul << 3,
		TZMiddleGlandRightAnterior = 1ul << 4,
		TZMiddleGlandRightPosterior = 1ul << 5,
		TZMiddleGlandLeftAnterior = 1ul << 6,
		TZMiddleGlandLeftPosterior = 1ul << 7,
		TZApexRightAnterior = 1ul << 8,
		TZApexRightPosterior = 1ul << 9,
		TZApexLeftAnterior = 1ul << 10,
		TZApexLeftPosterior = 1ul << 11,
		PZBaseRightAnterior = 1ul << 12,
		PZBaseRightPosteriorLateral = 1ul << 13,
		PZBaseRightPosteriorMedial = 1ul << 14,
		PZBaseLeftAnterior = 1ul << 15,
		PZBaseLeftPosteriorLateral = 1ul << 16,
		PZBaseLeftPosteriorMedial = 1ul << 17,
		PZMiddleGlandRightAnterior = 1 << 18,
		PZMiddleGlandRightPosteriorLateral = 1ul << 19,
		PZMiddleGlandRightPosteriorMedial = 1ul << 20,
		PZMiddleGlandLeftAnterior = 1ul << 21,
		PZMiddleGlandLeftPosteriorLateral = 1ul << 22,
		PZMiddleGlandLeftPosteriorMedial = 1ul << 23,
		PZApexRightAnterior = 1ul << 24,
		PZApexRightPosteriorLateral = 1ul << 25,
		PZApexRightPosteriorMedial = 1ul << 26,
		PZApexLeftAnterior = 1ul << 27,
		PZApexLeftPosteriorLateral = 1ul << 28,
		PZApexLeftPosteriorMedial = 1ul << 29,
		CZRight = 1ul << 30,
		CZLeft = 1ul << 31,
		AFSBaseRight = 1ul << 32,
		AFSBaseLeft = 1ul << 33,
		AFSMiddleGlandRight = 1ul << 34,
		AFSMiddleGlandLeft = 1ul << 35,
		AFSApexRight = 1ul << 36,
		AFSApexLeft = 1ul << 37,
		SBRight = 1ul << 38,
		SBLeft = 1ul << 39

	}
}
